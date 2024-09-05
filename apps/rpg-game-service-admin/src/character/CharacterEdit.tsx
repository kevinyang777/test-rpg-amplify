import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { FieldModelTitle } from "../fieldModel/FieldModelTitle";
import { InventoryTitle } from "../inventory/InventoryTitle";
import { StatusTitle } from "../status/StatusTitle";
import { UserTitle } from "../user/UserTitle";

export const CharacterEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="experience" source="experience" />
        <ReferenceInput
          source="fieldField.id"
          reference="FieldModel"
          label="Field"
        >
          <SelectInput optionText={FieldModelTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="hp" source="hp" />
        <ReferenceArrayInput
          source="inventories"
          reference="Inventory"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={InventoryTitle} />
        </ReferenceArrayInput>
        <NumberInput step={1} label="level" source="level" />
        <TextInput label="name" source="name" />
        <ReferenceArrayInput
          source="statuses"
          reference="Status"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={StatusTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
