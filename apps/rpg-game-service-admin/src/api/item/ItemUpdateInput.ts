import { InventoryUpdateManyWithoutItemsInput } from "./InventoryUpdateManyWithoutItemsInput";

export type ItemUpdateInput = {
  description?: string | null;
  inventories?: InventoryUpdateManyWithoutItemsInput;
  name?: string | null;
  value?: number | null;
};
