import { FieldModel } from "../fieldModel/FieldModel";
import { Inventory } from "../inventory/Inventory";
import { Status } from "../status/Status";
import { User } from "../user/User";

export type Character = {
  createdAt: Date;
  experience: number | null;
  fieldField?: FieldModel | null;
  hp: number | null;
  id: string;
  inventories?: Array<Inventory>;
  level: number | null;
  name: string | null;
  statuses?: Array<Status>;
  updatedAt: Date;
  user?: User | null;
};
