import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type NpcWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
};
