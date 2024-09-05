import { CharacterWhereUniqueInput } from "../character/CharacterWhereUniqueInput";
import { ItemWhereUniqueInput } from "../item/ItemWhereUniqueInput";

export type InventoryCreateInput = {
  character?: CharacterWhereUniqueInput | null;
  item?: ItemWhereUniqueInput | null;
};
