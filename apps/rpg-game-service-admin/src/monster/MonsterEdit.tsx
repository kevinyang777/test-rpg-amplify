import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const MonsterEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput
          step={1}
          label="experience_reward"
          source="experienceReward"
        />
        <NumberInput step={1} label="level" source="level" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
