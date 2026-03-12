import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.setGlobalPrefix('api/v1')
  app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true }))
  app.enableCors({ origin: process.env.FRONTEND_URL || 'http://localhost:3000' })

  const config = new DocumentBuilder()
    .setTitle('ServiceConnect AI API')
    .setDescription('API for the ServiceConnect AI platform')
    .setVersion('1.0')
    .addBearerAuth()
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api/docs', app, document)

  await app.listen(process.env.PORT || 3001)
  console.log(`🚀 API running on port ${process.env.PORT || 3001}`)
}
bootstrap()
