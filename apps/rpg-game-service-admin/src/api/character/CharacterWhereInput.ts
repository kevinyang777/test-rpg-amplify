import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StatusListRelationFilter } from "../status/StatusListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CharacterWhereInput = {
  experience?: IntNullableFilter;
  id?: StringFilter;
  level?: IntNullableFilter;
  name?: StringNullableFilter;
  statuses?: StatusListRelationFilter;
  user?: UserWhereUniqueInput;
};
