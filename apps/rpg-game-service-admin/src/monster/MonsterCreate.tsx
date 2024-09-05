import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const MonsterCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput
          step={1}
          label="experience_reward"
          source="experienceReward"
        />
        <NumberInput step={1} label="level" source="level" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Create>
  );
};
