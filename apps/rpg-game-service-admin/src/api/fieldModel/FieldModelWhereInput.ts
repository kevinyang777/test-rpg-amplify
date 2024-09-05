import { CharacterListRelationFilter } from "../character/CharacterListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MonsterListRelationFilter } from "../monster/MonsterListRelationFilter";

export type FieldModelWhereInput = {
  characters?: CharacterListRelationFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  monsters?: MonsterListRelationFilter;
  name?: StringNullableFilter;
};
