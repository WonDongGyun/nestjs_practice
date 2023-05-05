import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { User } from "./entity/user.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class UserService {
	constructor(
		@InjectRepository(User)
		private readonly userRepository: Repository<User>
	) {}

	async getUser(userId: string) {
		return this.userRepository.findOneBy({ userId });
	}
}
