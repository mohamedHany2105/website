import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';
@Entity('subscriptions')
export class Subscription {
    @PrimaryGeneratedColumn()
    subscriptionId: number;
    @Column({ type: 'int' })
    userId: number;
    @Column({ type: 'int' })
    serviceId: number;
    @Column({ type: 'boolean' })
    isServiceActive: boolean;
    @Column({ type: 'varchar', length: 255 })
    serviceName: string;
    @Column({ type: 'date' })
    StartDate: Date;
    @Column({ type: 'date' })
    EndDate: Date;

}
