import { IntNullableFilter } from "../../util/IntNullableFilter";
import { CharacterWhereUniqueInput } from "../character/CharacterWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type StatusWhereInput = {
  agility?: IntNullableFilter;
  character?: CharacterWhereUniqueInput;
  id?: StringFilter;
  intelligence?: IntNullableFilter;
  strength?: IntNullableFilter;
};
