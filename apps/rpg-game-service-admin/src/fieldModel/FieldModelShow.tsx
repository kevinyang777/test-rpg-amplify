import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { FIELDMODEL_TITLE_FIELD } from "./FieldModelTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const FieldModelShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Character"
          target="fieldFieldId"
          label="Characters"
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
        </ReferenceManyField>
        <ReferenceManyField
          reference="Monster"
          target="fieldFieldId"
          label="Monsters"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="experience_reward" source="experienceReward" />
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
