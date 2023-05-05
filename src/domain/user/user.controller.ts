import { Controller, Get, Query } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller("user")
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Get("")
	async getUser(@Query("userid") userid: string) {
		return await this.userService.getUser(userid);
	}
}
