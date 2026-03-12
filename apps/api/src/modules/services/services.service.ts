import { Injectable } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

@Injectable()
export class ServicesService {
  async findAll() {
    return prisma.service.findMany({
      where: { isActive: true },
      orderBy: { sortOrder: 'asc' },
      include: { category: true },
    })
  }

  async findCategories() {
    return prisma.serviceCategory.findMany({
      where: { isActive: true },
      orderBy: { sortOrder: 'asc' },
      include: { services: { where: { isActive: true } } },
    })
  }

  async findById(id: string) {
    return prisma.service.findUnique({ where: { id }, include: { category: true } })
  }
}
