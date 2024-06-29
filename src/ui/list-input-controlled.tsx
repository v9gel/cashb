import { ListInput } from "konsta/react";
import { Controller, Control, FieldValues } from "react-hook-form";

type ListInputProps = React.ComponentProps<typeof ListInput>;

type Props = {
  control?: Control<FieldValues>;
  name: string;
} & ListInputProps;

export const ListInputControlled = (props: Props) => {
  const { control, name, ...restProps } = props;

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange, onBlur } }) => (
        <ListInput
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          {...restProps}
        />
      )}
    />
  );
};
