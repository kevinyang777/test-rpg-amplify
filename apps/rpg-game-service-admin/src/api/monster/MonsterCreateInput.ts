import { FieldModelWhereUniqueInput } from "../fieldModel/FieldModelWhereUniqueInput";

export type MonsterCreateInput = {
  experienceReward?: number | null;
  fieldField?: FieldModelWhereUniqueInput | null;
  hp?: number | null;
  level?: number | null;
  name?: string | null;
};
