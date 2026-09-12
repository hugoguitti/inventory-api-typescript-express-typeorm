import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column({ length: 80 })
  description?: string;

  // TODO relations
  // @Column()
  // products!: boolean
}
