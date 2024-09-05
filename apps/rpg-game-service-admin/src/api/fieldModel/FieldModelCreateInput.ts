import { CharacterCreateNestedManyWithoutFieldModelsInput } from "./CharacterCreateNestedManyWithoutFieldModelsInput";
import { MonsterCreateNestedManyWithoutFieldModelsInput } from "./MonsterCreateNestedManyWithoutFieldModelsInput";

export type FieldModelCreateInput = {
  characters?: CharacterCreateNestedManyWithoutFieldModelsInput;
  description?: string | null;
  monsters?: MonsterCreateNestedManyWithoutFieldModelsInput;
  name?: string | null;
};
