import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";
import {
	Column,
	CreateDateColumn,
	DeleteDateColumn,
	Entity,
	PrimaryColumn,
	UpdateDateColumn
} from "typeorm";

// @Entity("user")
// export class User {
// 	@PrimaryColumn("varchar", { length: 50, name: "id" })
// 	id: string;

// 	@Column("varchar", { nullable: false, name: "pw" })
// 	pw: string;

// 	@Column("varchar", { nullable: false, length: 50, name: "name" })
// 	name: string;

// 	@CreateDateColumn()
// 	createdAt: Date;

// 	@UpdateDateColumn()
// 	updatedAt: Date;

// 	@DeleteDateColumn()
// 	deletedAt: Date;
// }

@Entity("user")
export class User {
	@IsString()
	@MinLength(5)
	@MaxLength(10)
	@IsNotEmpty()
	@PrimaryColumn("varchar", { length: 50, name: "id" })
	@ApiProperty({ description: "사용자 ID" })
	id: string;

	@Column("varchar", { nullable: false, name: "pw" })
	@ApiProperty({ description: "사용자 PW" })
	pw: string;

	@IsString()
	@IsNotEmpty()
	@Column("varchar", { nullable: false, length: 50, name: "name" })
	@ApiProperty({ description: "사용자 이름" })
	name: string;

	@CreateDateColumn()
	@ApiProperty({ description: "생성일" })
	createdAt: Date;

	@UpdateDateColumn()
	@ApiProperty({ description: "수정일" })
	updatedAt: Date;

	@DeleteDateColumn()
	@ApiProperty({ description: "삭제일" })
	deletedAt: Date;
}
