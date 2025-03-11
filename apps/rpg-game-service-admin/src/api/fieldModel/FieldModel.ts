import { Character } from "../character/Character";
import { Monster } from "../monster/Monster";

export type FieldModel = {
  characters?: Array<Character>;
  createdAt: Date;
  description: string | null;
  id: string;
  monsters?: Array<Monster>;
  name: string | null;
  updatedAt: Date;
};
