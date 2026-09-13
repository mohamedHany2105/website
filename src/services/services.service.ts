import { Injectable } from '@nestjs/common';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import {InjectRepository} from "@nestjs/typeorm";
import { Service } from './entities/service.entity';
import { Repository } from 'typeorm/repository/Repository.js';
@Injectable()
export class ServicesService {
constructor(
  @InjectRepository(Service) 
  private readonly serviceRepository: Repository<Service>
) {}

  create(createServiceDto: CreateServiceDto) {
    
    const newService = this.serviceRepository.create(createServiceDto); 
    this.serviceRepository.save(newService);
    console.log(newService);
    return {
      message: 'Service created successfully',
      service: newService,
    }
  }

  findAll() {
    return this.serviceRepository.find();
  }

  findOne(id: number) {
    return this.serviceRepository.findOne({ where: { serviceId: id } });
  }

  update(id: number, updateServiceDto: UpdateServiceDto) {
    const service = this.serviceRepository.update( id , updateServiceDto);
    return {
      message: 'Service updated successfully',
      data: service,
    };
  }

  remove(id: number) {
        const service = this.serviceRepository.delete( id );
    return {
      message: 'Service Deleted successfully',
      data: service,
    };
  }
}
