import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
export class CreateServiceDto {
    @IsNumber()
    serviceId: number;
    @IsString()
    @IsNotEmpty()
    serviceName: string;
    @IsNumber()
    @IsNotEmpty()
    servicePrice: number;
    @IsString()
    serviceDescription: string
    
}
