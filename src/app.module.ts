import { Module } from "@nestjs/common";
import { UserModule } from "./domain/user/user.module";
import { User } from "./domain/user/entity/user.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: "mysql",
			host: "localhost",
			port: 3306,
			username: "root",
			password: "4633877",
			database: "practice",
			entities: [User],
			synchronize: true
		}),
		UserModule
	]
})
export class AppModule {}
