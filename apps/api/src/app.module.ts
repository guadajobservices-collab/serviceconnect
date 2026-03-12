import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AuthModule } from './modules/auth/auth.module'
import { UsersModule } from './modules/users/users.module'
import { BookingsModule } from './modules/bookings/bookings.module'
import { ServicesModule } from './modules/services/services.module'
import { HealthModule } from './modules/health/health.module'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    UsersModule,
    BookingsModule,
    ServicesModule,
    HealthModule,
  ],
})
export class AppModule {}
