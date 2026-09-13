import {Column, Entity, PrimaryGeneratedColumn, } from 'typeorm';
@Entity('services')
export class Service {
@PrimaryGeneratedColumn()
serviceId: number;
@Column({ type: 'varchar', length: 255 })
serviceName: string;
@Column({ type: 'decimal', precision: 10, scale: 2 })
servicePrice: number;
@Column({ type: 'varchar', length: 255 })
serviceDescription: string
@Column({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
createdAt: Date;
@Column({ name: 'updated_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
updatedAt: Date;




}
 