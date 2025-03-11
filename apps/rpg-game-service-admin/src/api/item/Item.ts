import { Inventory } from "../inventory/Inventory";

export type Item = {
  createdAt: Date;
  description: string | null;
  id: string;
  inventories?: Array<Inventory>;
  name: string | null;
  updatedAt: Date;
  value: number | null;
};
