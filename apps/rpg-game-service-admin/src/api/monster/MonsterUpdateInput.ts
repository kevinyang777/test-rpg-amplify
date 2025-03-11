import { FieldModelWhereUniqueInput } from "../fieldModel/FieldModelWhereUniqueInput";

export type MonsterUpdateInput = {
  experienceReward?: number | null;
  fieldField?: FieldModelWhereUniqueInput | null;
  hp?: number | null;
  level?: number | null;
  name?: string | null;
};
