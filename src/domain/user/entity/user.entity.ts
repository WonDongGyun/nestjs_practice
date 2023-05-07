import {
	Column,
	CreateDateColumn,
	DeleteDateColumn,
	Entity,
	PrimaryColumn,
	UpdateDateColumn
} from "typeorm";

@Entity("user")
export class User {
	@PrimaryColumn("varchar", { length: 50, name: "id" })
	id: string;

	@Column("varchar", { nullable: false, name: "pw", select: false })
	pw: string;

	@Column("varchar", { nullable: false, length: 50, name: "name" })
	name: string;

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;

	@DeleteDateColumn()
	deletedAt: Date;
}
