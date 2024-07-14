import { addCircleIcon24 } from "@/assets/icons";
import { Banks, Card } from "@/stores/cards-store";
import {
  getCashbackCategoryByBank,
  getCategoryNameById,
} from "@/stores/cashback-store";
import {
  Link,
  List,
  ListItem,
  Navbar,
  Page,
  Popup,
  Stepper,
} from "konsta/react";
import { useEffect } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { FormLabel } from "../../ui/form-label";

const DEFAULT_PERSENT = 5;

interface Props {
  isOpened: false | Card;
  close: () => void;
}

type FormValues = {
  monthUTC: number;
  cardId: string;
  categories: {
    categoryId: string;
    percent: number;
  }[];
};

export const EditCashbackPopup = ({ isOpened, close }: Props) => {
  let card: Card | undefined = undefined;
  if (isOpened) {
    card = isOpened;
  }

  let defaultValues = {
    monthUTC: 0,
    cardId: card?.id,
    categories: [],
  };

  const { control, /*handleSubmit,*/ reset, clearErrors } = useForm<FormValues>(
    {
      defaultValues,
      mode: "onBlur",
    }
  );

  const { fields, append /*remove*/ } = useFieldArray({
    name: "categories",
    control,
  });

  const resetForm = () => {
    reset(defaultValues);
    clearErrors();
  };

  const cancelHandler = () => {
    resetForm();
    close();
  };

  useEffect(() => {
    if (isOpened) {
      resetForm();
    }
  }, [isOpened]);

  return (
    <Popup opened={Boolean(isOpened)} onBackdropClick={cancelHandler}>
      <Page>
        <Navbar
          title={card?.title}
          right={
            <Link navbar onClick={cancelHandler}>
              Закрыть
            </Link>
          }
        />
        <List strongIos outlineIos insetIos>
          {fields.map((field) => {
            return (
              <ListItem
                media={<Stepper value={field.percent} outline />}
                title={
                  <FormLabel>{getCategoryNameById(field.categoryId)}</FormLabel>
                }
                link
              />
            );
          })}

          <ListItem
            media={
              <img
                src={addCircleIcon24}
                width={28}
                height={28}
                alt="add circle icon"
              />
            }
            title="Добавить категорию"
            onClick={() => {
              if (card) {
                append({
                  categoryId: getCashbackCategoryByBank(card.bank as Banks)[0]
                    .id,
                  percent: DEFAULT_PERSENT,
                });
              }
            }}
          />
        </List>
      </Page>
    </Popup>
  );
};
