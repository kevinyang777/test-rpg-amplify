import { FieldModelWhereUniqueInput } from "../fieldModel/FieldModelWhereUniqueInput";
import { InventoryUpdateManyWithoutCharactersInput } from "./InventoryUpdateManyWithoutCharactersInput";
import { StatusUpdateManyWithoutCharactersInput } from "./StatusUpdateManyWithoutCharactersInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CharacterUpdateInput = {
  experience?: number | null;
  fieldField?: FieldModelWhereUniqueInput | null;
  hp?: number | null;
  inventories?: InventoryUpdateManyWithoutCharactersInput;
  level?: number | null;
  name?: string | null;
  statuses?: StatusUpdateManyWithoutCharactersInput;
  user?: UserWhereUniqueInput | null;
};
