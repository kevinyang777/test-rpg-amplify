import { CharacterWhereUniqueInput } from "../character/CharacterWhereUniqueInput";

export type StatusUpdateInput = {
  agility?: number | null;
  character?: CharacterWhereUniqueInput | null;
  intelligence?: number | null;
  strength?: number | null;
};
