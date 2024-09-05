import { StatusCreateNestedManyWithoutCharactersInput } from "./StatusCreateNestedManyWithoutCharactersInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CharacterCreateInput = {
  experience?: number | null;
  level?: number | null;
  name?: string | null;
  statuses?: StatusCreateNestedManyWithoutCharactersInput;
  user?: UserWhereUniqueInput | null;
};
