import { Card } from "@/stores/cards-store";
import { getCashbackCategoryByBank } from "@/stores/cashback-store";
import { useCashbackStore } from "@/stores/cashback-store/store";
import { ListItemMultiSelectControlled } from "@/ui/list-item-multi-select-controlled";
import { ListItemStepperControlled } from "@/ui/list-item-stepper-controlled copy";
import { BlockFooter, List } from "konsta/react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

const DEFAULT_PERSENT = 5;

type FormValues = {
  month: number;
  cardId: string;
  categories: {
    name: string;
    id: string;
    percent: number;
  }[];
};

type Props = {
  month: number;
  card: Card;
  isOpened: boolean;
};

export const MothCashbackCategories = ({ month, card, isOpened }: Props) => {
  const { getCashback, addCashback } = useCashbackStore();

  const curCashback = getCashback({
    month,
    cardId: card?.id,
  });

  const defaultValues = curCashback ?? {
    month,
    cardId: card?.id,
    categories: [],
  };

  const { control, handleSubmit, reset, clearErrors, watch } =
    useForm<FormValues>({
      defaultValues,
      mode: "all",
    });

  const categories = watch("categories");

  const resetForm = () => {
    reset(defaultValues);
    clearErrors();
  };

  useEffect(() => {
    if (isOpened) {
      resetForm();
    }
  }, [isOpened]);

  useEffect(() => {
    const subscription = watch(() => handleSubmit(addCashback)());
    return () => subscription.unsubscribe();
  }, [handleSubmit, watch]);

  const cashbackCategoryList = getCashbackCategoryByBank(card?.bank).map(
    (value) => {
      return {
        ...value,
        percent: DEFAULT_PERSENT,
      };
    }
  );

  return (
    <>
      <List strongIos outlineIos insetIos>
        <ListItemMultiSelectControlled
          label="Категории"
          items={cashbackCategoryList}
          control={control}
          name={`categories`}
          hideIcon
          key={"categories"}
        />

        {categories.map((category, index) => {
          return (
            <ListItemStepperControlled
              control={control}
              name={`categories.${index}.percent`}
              label={category.name}
              key={category.id}
              min={0}
              max={100}
            />
          );
        })}
      </List>
      <BlockFooter>
        Выбери несколько категорий из списка, а затем задай размер кэшбэка для
        каждой
      </BlockFooter>
    </>
  );
};
