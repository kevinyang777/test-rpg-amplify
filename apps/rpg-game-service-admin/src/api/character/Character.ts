import { Status } from "../status/Status";
import { User } from "../user/User";

export type Character = {
  createdAt: Date;
  experience: number | null;
  id: string;
  level: number | null;
  name: string | null;
  statuses?: Array<Status>;
  updatedAt: Date;
  user?: User | null;
};
