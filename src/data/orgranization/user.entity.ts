import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  userName: string;

  @Column('int')
  userId: number;

  @Column('int')
  sex: number;

  @Column({ length: 255 })
  iphone: string;

  @Column({ length: 255 })
  email: string;

  @Column({ length: 255 })
  departmentId: string;

  @Column('simple-array')
  roleId: string[];

  @Column({ length: 255 })
  description: string;

  @Column({ default: true })
  state: boolean;
}
