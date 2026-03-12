import { Controller, Get, Param, UseGuards, Query } from '@nestjs/common'
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger'
import { AuthGuard } from '@nestjs/passport'
import { BookingsService } from './bookings.service'

@ApiTags('bookings')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
@Controller('bookings')
export class BookingsController {
  constructor(private bookingsService: BookingsService) {}

  @Get()
  findAll(@Query('page') page?: string, @Query('limit') limit?: string) {
    return this.bookingsService.findAll(Number(page) || 1, Number(limit) || 20)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bookingsService.findById(id)
  }
}
