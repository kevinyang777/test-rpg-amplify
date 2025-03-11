import { FieldModel as TFieldModel } from "../api/fieldModel/FieldModel";

export const FIELDMODEL_TITLE_FIELD = "name";

export const FieldModelTitle = (record: TFieldModel): string => {
  return record.name?.toString() || String(record.id);
};
