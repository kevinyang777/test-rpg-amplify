import { SortOrder } from "../../util/SortOrder";

export type CharacterOrderByInput = {
  createdAt?: SortOrder;
  experience?: SortOrder;
  id?: SortOrder;
  level?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
