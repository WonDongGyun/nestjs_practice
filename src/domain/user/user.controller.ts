import { Controller, Get, Query } from "@nestjs/common";
import { UserService } from "./user.service";
import { FindUserDto } from "./dto/findUser.dto";
import { User } from "./entity/user.entity";
import { ApiOkResponse } from "@nestjs/swagger";

@Controller("user")
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Get("")
	@ApiOkResponse({ type: User })
	async getUser(@Query() findUserDto: FindUserDto) {
		return this.userService.getUser(findUserDto);
	}

	// @Get("")
	// async getUser2(@Query() user: User) {
	// 	return this.userService.getUser(user);
	// }
}
