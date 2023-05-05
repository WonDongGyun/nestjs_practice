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
	@PrimaryColumn("varchar", { length: 50, name: "user_id" })
	userId!: string;

	@Column("varchar", { nullable: false, name: "user_pw" })
	userPw!: string;

	@Column("varchar", { nullable: false, length: 50, name: "user_nm" })
	userNm!: string;

	@CreateDateColumn()
	createdAt?: Date;

	@UpdateDateColumn()
	updatedAt?: Date;

	@DeleteDateColumn()
	deletedAt?: Date;
}
