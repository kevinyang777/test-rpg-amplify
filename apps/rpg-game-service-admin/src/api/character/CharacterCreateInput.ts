import { FieldModelWhereUniqueInput } from "../fieldModel/FieldModelWhereUniqueInput";
import { InventoryCreateNestedManyWithoutCharactersInput } from "./InventoryCreateNestedManyWithoutCharactersInput";
import { StatusCreateNestedManyWithoutCharactersInput } from "./StatusCreateNestedManyWithoutCharactersInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CharacterCreateInput = {
  experience?: number | null;
  fieldField?: FieldModelWhereUniqueInput | null;
  hp?: number | null;
  inventories?: InventoryCreateNestedManyWithoutCharactersInput;
  level?: number | null;
  name?: string | null;
  statuses?: StatusCreateNestedManyWithoutCharactersInput;
  user?: UserWhereUniqueInput | null;
};
