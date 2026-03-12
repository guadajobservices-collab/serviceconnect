import { Injectable } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

@Injectable()
export class UsersService {
  async findByEmail(email: string) {
    return prisma.user.findUnique({ where: { email } })
  }

  async findById(id: string) {
    return prisma.user.findUnique({ where: { id } })
  }

  async create(data: {
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    role?: 'client' | 'provider'
    phone?: string
  }) {
    return prisma.user.create({
      data: {
        email: data.email,
        passwordHash: data.passwordHash,
        firstName: data.firstName,
        lastName: data.lastName,
        role: data.role || 'client',
        phone: data.phone,
      },
    })
  }

  async findAll(page = 1, limit = 20) {
    const skip = (page - 1) * limit
    const [users, total] = await Promise.all([
      prisma.user.findMany({ skip, take: limit, orderBy: { createdAt: 'desc' } }),
      prisma.user.count(),
    ])
    return { users, total, page, limit }
  }
}
