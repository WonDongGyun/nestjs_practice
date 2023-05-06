import { IsString, IsNotEmpty, MinLength, MaxLength } from "class-validator";

export class FindUserDto {
	@IsString()
	@MinLength(5)
	@MaxLength(10)
	@IsNotEmpty()
	id: string;

	@IsString()
	@IsNotEmpty()
	name: string;
}
