import { Exclude, Expose } from "class-transformer";

@Exclude()
export class FindUserReturnDTO {
	@Expose()
	id: string;

	@Expose()
	name: string;
}
