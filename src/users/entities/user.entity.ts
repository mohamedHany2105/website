import {Entity,Column,PrimaryGeneratedColumn} from 'typeorm';
@Entity('rr')
export class User {
@PrimaryGeneratedColumn()
userId: number;
@Column({name:'email', type: 'varchar', length: 255 })
mail: string 
@Column({ name: 'password', type: 'varchar', length: 255 })
password: string 
@Column({ type:  'varchar', length: 100 })
Role:  string;

@Column({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
createdAt: Date;
@Column({ name: 'updated_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
updatedAt: Date;
@Column({ name: 'blocked', type: 'boolean', nullable: true })
blocked: boolean;
}
