import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type MonsterWhereInput = {
  experienceReward?: IntNullableFilter;
  id?: StringFilter;
  level?: IntNullableFilter;
  name?: StringNullableFilter;
};
