import { StatusUpdateManyWithoutCharactersInput } from "./StatusUpdateManyWithoutCharactersInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CharacterUpdateInput = {
  experience?: number | null;
  level?: number | null;
  name?: string | null;
  statuses?: StatusUpdateManyWithoutCharactersInput;
  user?: UserWhereUniqueInput | null;
};
