import { CharacterWhereUniqueInput } from "../character/CharacterWhereUniqueInput";

export type StatusCreateInput = {
  agility?: number | null;
  character?: CharacterWhereUniqueInput | null;
  intelligence?: number | null;
  strength?: number | null;
};
