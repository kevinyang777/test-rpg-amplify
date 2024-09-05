import { CharacterWhereUniqueInput } from "../character/CharacterWhereUniqueInput";
import { ItemWhereUniqueInput } from "../item/ItemWhereUniqueInput";

export type InventoryUpdateInput = {
  character?: CharacterWhereUniqueInput | null;
  item?: ItemWhereUniqueInput | null;
};
