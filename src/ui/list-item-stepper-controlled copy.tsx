import { ListItem, Stepper } from "konsta/react";
import { Control, Controller, FieldPath, FieldValues } from "react-hook-form";

type StepperProps = React.ComponentProps<typeof Stepper>;

export type Props<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
  name: TName;
  control?: Control<TFieldValues>;
  label: string;
} & StepperProps;

export const ListItemStepperControlled = <T extends FieldValues>(
  props: Props<T>
) => {
  const { control, name, label, ...restProps } = props;

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange } }) => (
        <ListItem
          title={label}
          after={
            <Stepper
              value={value}
              smallIos
              onPlus={() => onChange(value + 1)}
              onMinus={() => onChange(value - 1)}
              {...restProps}
            />
          }
        />
      )}
    />
  );
};
