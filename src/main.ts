import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import {SwaggerModule,DocumentBuilder} from '@nestjs/swagger';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // const documentBuilder=new DocumentBuilder().setTitle('3P Website API')
  // .setDescription('The 3P Website API description')
  // .setVersion('1.0')
  // const fa;ctor =()=>SwaggerModule.createDocument(app,documentBuilder.build());
  // SwaggerModule.setup('api',app,factor())
  await app.listen(process.env.PORT ?? 3000);

}

console.log(`Server is running on port http://localhost:${process.env.PORT ?? 3001}`); 
console.log(`Server is running on port http://localhost:${process.env.PORT ?? 3001}/api`); 
bootstrap(); 
