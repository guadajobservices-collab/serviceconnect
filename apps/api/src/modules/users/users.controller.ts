import { Controller, Get, Param, UseGuards, Query } from '@nestjs/common'
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger'
import { AuthGuard } from '@nestjs/passport'
import { UsersService } from './users.service'

@ApiTags('users')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  findAll(@Query('page') page?: string, @Query('limit') limit?: string) {
    return this.usersService.findAll(Number(page) || 1, Number(limit) || 20)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findById(id)
  }
}
