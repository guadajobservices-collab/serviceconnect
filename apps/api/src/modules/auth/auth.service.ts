import { Injectable, UnauthorizedException, ConflictException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import * as bcrypt from 'bcryptjs'
import { RegisterDto } from './dto/register.dto'
import { LoginDto } from './dto/login.dto'
import { UsersService } from '../users/users.service'

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async register(dto: RegisterDto) {
    const existing = await this.usersService.findByEmail(dto.email)
    if (existing) throw new ConflictException('Email already in use')

    const passwordHash = await bcrypt.hash(dto.password, 12)
    const user = await this.usersService.create({ ...dto, passwordHash })

    const tokens = this.generateTokens(user.id, user.email, user.role)
    return { user: this.sanitize(user), ...tokens }
  }

  async login(dto: LoginDto) {
    const user = await this.usersService.findByEmail(dto.email)
    if (!user) throw new UnauthorizedException('Invalid credentials')

    const valid = await bcrypt.compare(dto.password, user.passwordHash)
    if (!valid) throw new UnauthorizedException('Invalid credentials')

    const tokens = this.generateTokens(user.id, user.email, user.role)
    return { user: this.sanitize(user), ...tokens }
  }

  async refresh(token: string) {
    try {
      const payload = this.jwtService.verify(token, {
        secret: process.env.JWT_REFRESH_SECRET || 'dev-refresh-secret',
      })
      const tokens = this.generateTokens(payload.sub, payload.email, payload.role)
      return tokens
    } catch {
      throw new UnauthorizedException('Invalid refresh token')
    }
  }

  private generateTokens(userId: string, email: string, role: string) {
    const payload = { sub: userId, email, role }
    return {
      accessToken: this.jwtService.sign(payload),
      refreshToken: this.jwtService.sign(payload, {
        secret: process.env.JWT_REFRESH_SECRET || 'dev-refresh-secret',
        expiresIn: '7d',
      }),
    }
  }

  private sanitize(user: any) {
    const { passwordHash, ...rest } = user
    return rest
  }
}
