import { Controller, Get, Param } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { ServicesService } from './services.service'

@ApiTags('services')
@Controller('services')
export class ServicesController {
  constructor(private servicesService: ServicesService) {}

  @Get()
  findAll() {
    return this.servicesService.findAll()
  }

  @Get('categories')
  findCategories() {
    return this.servicesService.findCategories()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.servicesService.findById(id)
  }
}
