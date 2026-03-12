import { Injectable } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

@Injectable()
export class BookingsService {
  async findAll(page = 1, limit = 20) {
    const skip = (page - 1) * limit
    const [bookings, total] = await Promise.all([
      prisma.booking.findMany({
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
        include: { service: true, address: true },
      }),
      prisma.booking.count(),
    ])
    return { bookings, total, page, limit }
  }

  async findById(id: string) {
    return prisma.booking.findUnique({
      where: { id },
      include: { service: true, address: true, payment: true, review: true },
    })
  }

  async findByClient(clientId: string) {
    return prisma.booking.findMany({
      where: { clientId },
      orderBy: { createdAt: 'desc' },
      include: { service: true, address: true },
    })
  }
}
