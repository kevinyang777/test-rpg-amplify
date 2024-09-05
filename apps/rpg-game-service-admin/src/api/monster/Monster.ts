import { FieldModel } from "../fieldModel/FieldModel";

export type Monster = {
  createdAt: Date;
  experienceReward: number | null;
  fieldField?: FieldModel | null;
  hp: number | null;
  id: string;
  level: number | null;
  name: string | null;
  updatedAt: Date;
};
