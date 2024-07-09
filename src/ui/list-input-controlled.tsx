import { ListInput } from "konsta/react";
import { Controller, Control, FieldValues, FieldPath } from "react-hook-form";

type ListInputProps = React.ComponentProps<typeof ListInput>;

export type Props<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
  name: TName;
  control?: Control<TFieldValues>;
} & ListInputProps;

export const ListInputControlled = <T extends FieldValues>(props: Props<T>) => {
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
