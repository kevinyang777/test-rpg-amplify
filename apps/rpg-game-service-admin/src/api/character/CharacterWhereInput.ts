import { IntNullableFilter } from "../../util/IntNullableFilter";
import { FieldModelWhereUniqueInput } from "../fieldModel/FieldModelWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { InventoryListRelationFilter } from "../inventory/InventoryListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StatusListRelationFilter } from "../status/StatusListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CharacterWhereInput = {
  experience?: IntNullableFilter;
  fieldField?: FieldModelWhereUniqueInput;
  hp?: IntNullableFilter;
  id?: StringFilter;
  inventories?: InventoryListRelationFilter;
  level?: IntNullableFilter;
  name?: StringNullableFilter;
  statuses?: StatusListRelationFilter;
  user?: UserWhereUniqueInput;
};
