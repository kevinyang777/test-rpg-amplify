import { Npc as TNpc } from "../api/npc/Npc";

export const NPC_TITLE_FIELD = "name";

export const NpcTitle = (record: TNpc): string => {
  return record.name?.toString() || String(record.id);
};
