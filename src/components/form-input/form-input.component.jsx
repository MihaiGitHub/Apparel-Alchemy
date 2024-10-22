import { FormInputLabel, Input, Group } from "./form-input.styles";

const FormInput = ({ label, ...otherProps }) => {
  // if length is 0, then shrink will be false, otherwise shrink will be true
  return (
    <Group>
      <Input {...otherProps} />

      {label && (
        <FormInputLabel shrink={otherProps.value.props}>{label}</FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
