import { useCardsStore } from "@/stores";
import { genCardId } from "@/stores/cards-store/helpers";
import { BANKS } from "@/stores/cards-store/types";
import { ListInputControlled } from "@/ui/list-input-controlled";
import { ListItemSelectControlled } from "@/ui/list-item-select-controlled";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, List, ListItem, Popup, Toolbar } from "konsta/react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useForm } from "react-hook-form";
import "swiper/css";
import { z } from "zod";
import { FormLabel } from "../../ui/form-label";
import { IoAddCircleOutline } from "react-icons/io5";
import { ListItemTitle } from "@/ui/list-item-title";

interface Props {}

const CardSchema = z.object({
  id: z.string(),
  title: z.string().min(3).max(50),
  bank: z.string(),
});

type CardSchemaType = z.infer<typeof CardSchema>;

const DEFAULT_VALUES = { id: genCardId(), title: "", bank: BANKS[0].id };

export const AddCard = ({}: Props) => {
  const [popupOpened, setPopupOpened] = useState(false);

  const { addCard } = useCardsStore();
  const defaultValues = DEFAULT_VALUES;

  const {
    control,
    formState: { errors },
    handleSubmit,
    clearErrors,
    reset,
  } = useForm<CardSchemaType>({
    defaultValues,
    resolver: zodResolver(CardSchema),
  });

  const resetForm = () => {
    defaultValues.id = genCardId();

    reset(defaultValues);
    clearErrors();
  };

  const cancelHandler = () => {
    setPopupOpened(false);
  };

  const submitHandler = () => {
    return handleSubmit((data) => {
      addCard(data);
      setPopupOpened(false);
    })();
  };

  useEffect(() => {
    if (popupOpened) {
      resetForm();
    }
  }, [popupOpened]);

  return (
    <>
      <ListItem
        title={
          <ListItemTitle
            title="Новая карта"
            media={<IoAddCircleOutline size={24} />}
          />
        }
        onClick={() => setPopupOpened(true)}
        className="cursor-pointer"
      />
      {createPortal(
        <Popup opened={popupOpened}>
          <div className="bg-ios-light-surface h-full overflow-auto">
            <Toolbar top>
              <Link toolbar onClick={cancelHandler}>
                Отмена
              </Link>
              <b>Новая карта</b>
              <Link toolbar onClick={submitHandler}>
                Готово
              </Link>
            </Toolbar>
            <List strongIos insetIos>
              <ListInputControlled
                media={<FormLabel>Название</FormLabel>}
                type="text"
                placeholder="Обязательное поле"
                control={control}
                name="title"
                error={errors.title?.message}
              />
              <ListItemSelectControlled
                label="Банк"
                items={BANKS}
                control={control}
                name="bank"
              />
            </List>
          </div>
        </Popup>,
        document.body
      )}
    </>
  );
};
