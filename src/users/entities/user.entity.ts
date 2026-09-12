import {Entity,Column,PrimaryGeneratedColumn} from 'typeorm';
@Entity('users')
export class User {
@PrimaryGeneratedColumn()
userId: number;
@Column({ type: 'varchar', length: 255 })
mail: string 
@Column({ type: 'varchar', length: 255 })
password: string 
@Column({ type: 'array', length: 10 })
Role: Array<'admin' | 'user'>;

}
