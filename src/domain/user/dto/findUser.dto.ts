import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty, MinLength, MaxLength } from "class-validator";

export class FindUserDto {
	@IsString()
	@MinLength(5)
	@MaxLength(10)
	@IsNotEmpty()
	@ApiProperty({ description: "사용자 ID" })
	id: string;

	@IsString()
	@IsNotEmpty()
	@ApiProperty({ description: "사용자 이름" })
	name: string;
}
