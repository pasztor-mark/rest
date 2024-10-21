import { IsDefined, IsString, IsNumber, Min } from "class-validator";

export class product {
  @IsDefined()
  @IsString()
  name: string

  @IsDefined()
  @IsNumber()
  @Min(3)
  price: number
}
