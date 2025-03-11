import { Character } from "../character/Character";
import { Item } from "../item/Item";

export type Inventory = {
  character?: Character | null;
  createdAt: Date;
  id: string;
  item?: Item | null;
  updatedAt: Date;
};
