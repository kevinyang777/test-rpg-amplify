import { IntNullableFilter } from "../../util/IntNullableFilter";
import { FieldModelWhereUniqueInput } from "../fieldModel/FieldModelWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type MonsterWhereInput = {
  experienceReward?: IntNullableFilter;
  fieldField?: FieldModelWhereUniqueInput;
  hp?: IntNullableFilter;
  id?: StringFilter;
  level?: IntNullableFilter;
  name?: StringNullableFilter;
};
