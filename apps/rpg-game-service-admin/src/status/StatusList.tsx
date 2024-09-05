import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { CHARACTER_TITLE_FIELD } from "../character/CharacterTitle";

export const StatusList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Statuses"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="agility" source="agility" />
        <ReferenceField
          label="Character"
          source="character.id"
          reference="Character"
        >
          <TextField source={CHARACTER_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="intelligence" source="intelligence" />
        <TextField label="strength" source="strength" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
