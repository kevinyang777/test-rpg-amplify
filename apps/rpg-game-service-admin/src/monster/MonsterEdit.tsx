import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { FieldModelTitle } from "../fieldModel/FieldModelTitle";

export const MonsterEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput
          step={1}
          label="experience_reward"
          source="experienceReward"
        />
        <ReferenceInput
          source="fieldField.id"
          reference="FieldModel"
          label="Field"
        >
          <SelectInput optionText={FieldModelTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="hp" source="hp" />
        <NumberInput step={1} label="level" source="level" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
