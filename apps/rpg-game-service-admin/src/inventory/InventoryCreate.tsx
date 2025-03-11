import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { CharacterTitle } from "../character/CharacterTitle";
import { ItemTitle } from "../item/ItemTitle";

export const InventoryCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="character.id"
          reference="Character"
          label="Character"
        >
          <SelectInput optionText={CharacterTitle} />
        </ReferenceInput>
        <ReferenceInput source="item.id" reference="Item" label="Item">
          <SelectInput optionText={ItemTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
