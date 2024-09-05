import { Character } from "../character/Character";

export type Status = {
  agility: number | null;
  character?: Character | null;
  createdAt: Date;
  id: string;
  intelligence: number | null;
  strength: number | null;
  updatedAt: Date;
};
