import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { CharacterTitle } from "../character/CharacterTitle";

export const StatusEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
