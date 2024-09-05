import { CharacterUpdateManyWithoutFieldModelsInput } from "./CharacterUpdateManyWithoutFieldModelsInput";
import { MonsterUpdateManyWithoutFieldModelsInput } from "./MonsterUpdateManyWithoutFieldModelsInput";

export type FieldModelUpdateInput = {
  characters?: CharacterUpdateManyWithoutFieldModelsInput;
  description?: string | null;
  monsters?: MonsterUpdateManyWithoutFieldModelsInput;
  name?: string | null;
};
