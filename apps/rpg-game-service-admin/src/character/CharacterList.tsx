import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { FIELDMODEL_TITLE_FIELD } from "../fieldModel/FieldModelTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const CharacterList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Characters"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="experience" source="experience" />
        <ReferenceField
          label="Field"
          source="fieldmodel.id"
          reference="FieldModel"
        >
          <TextField source={FIELDMODEL_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="hp" source="hp" />
        <TextField label="ID" source="id" />
        <TextField label="level" source="level" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
