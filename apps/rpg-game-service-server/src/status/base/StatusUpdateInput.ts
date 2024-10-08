/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsInt, Min, Max, IsOptional, ValidateNested } from "class-validator";
import { CharacterWhereUniqueInput } from "../../character/base/CharacterWhereUniqueInput";
import { Type } from "class-transformer";

@InputType()
class StatusUpdateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  agility?: number | null;

  @ApiProperty({
    required: false,
    type: () => CharacterWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CharacterWhereUniqueInput)
  @IsOptional()
  @Field(() => CharacterWhereUniqueInput, {
    nullable: true,
  })
  character?: CharacterWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  intelligence?: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  strength?: number | null;
}

export { StatusUpdateInput as StatusUpdateInput };
