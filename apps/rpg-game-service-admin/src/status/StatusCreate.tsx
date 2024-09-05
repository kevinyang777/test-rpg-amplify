import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { CharacterTitle } from "../character/CharacterTitle";

export const StatusCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="agility" source="agility" />
        <ReferenceInput
          source="character.id"
          reference="Character"
          label="Character"
        >
          <SelectInput optionText={CharacterTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="intelligence" source="intelligence" />
        <NumberInput step={1} label="strength" source="strength" />
      </SimpleForm>
    </Create>
  );
};
