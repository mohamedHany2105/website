import {Column, Entity, PrimaryGeneratedColumn, } from 'typeorm';
@Entity('services')
export class Service {
@PrimaryGeneratedColumn()
serviceId: number;
@Column({ type: 'varchar', length: 255 })
serviceName: string
@Column({ type: 'varchar', length: 255 })
serviceDescription: string



}
 