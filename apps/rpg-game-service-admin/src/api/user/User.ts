import { Character } from "../character/Character";
import { JsonValue } from "type-fest";

export type User = {
  characters?: Array<Character>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
