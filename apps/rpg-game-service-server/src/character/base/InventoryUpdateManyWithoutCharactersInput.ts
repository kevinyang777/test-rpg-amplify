/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { InventoryWhereUniqueInput } from "../../inventory/base/InventoryWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class InventoryUpdateManyWithoutCharactersInput {
  @Field(() => [InventoryWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [InventoryWhereUniqueInput],
  })
  connect?: Array<InventoryWhereUniqueInput>;

  @Field(() => [InventoryWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [InventoryWhereUniqueInput],
  })
  disconnect?: Array<InventoryWhereUniqueInput>;

  @Field(() => [InventoryWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [InventoryWhereUniqueInput],
  })
  set?: Array<InventoryWhereUniqueInput>;
}

export { InventoryUpdateManyWithoutCharactersInput as InventoryUpdateManyWithoutCharactersInput };
