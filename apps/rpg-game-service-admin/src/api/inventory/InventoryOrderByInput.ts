import { SortOrder } from "../../util/SortOrder";

export type InventoryOrderByInput = {
  characterId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  itemId?: SortOrder;
  updatedAt?: SortOrder;
};
