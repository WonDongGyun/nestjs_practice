import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { User } from "./entity/user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { FindUserDto } from "./dto/findUser.dto";
import { plainToInstance } from "class-transformer";
import { FindUserReturnDTO } from "./dto/findUserReturn.dto";

@Injectable()
export class UserService {
	constructor(
		@InjectRepository(User)
		private readonly userRepository: Repository<User>
	) {}

	async getUser({ id, name }: FindUserDto) {
		const user = await this.userRepository.findOneBy({ id, name });
		return plainToInstance(FindUserReturnDTO, user);
	}
}
