import { CharacterWhereUniqueInput } from "../character/CharacterWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { ItemWhereUniqueInput } from "../item/ItemWhereUniqueInput";

export type InventoryWhereInput = {
  character?: CharacterWhereUniqueInput;
  id?: StringFilter;
  item?: ItemWhereUniqueInput;
};
