import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { CHARACTER_TITLE_FIELD } from "./CharacterTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const CharacterShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="experience" source="experience" />
        <TextField label="ID" source="id" />
        <TextField label="level" source="level" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Status"
          target="characterId"
          label="Statuses"
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
