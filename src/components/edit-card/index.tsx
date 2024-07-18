import { useCardsStore } from "@/stores";
import { getBankFromId } from "@/stores/cards-store/helpers";
import { Card } from "@/stores/cards-store/types";
import { ListInputControlled } from "@/ui/list-input-controlled";
import { ListItemIcon } from "@/ui/list-item-icon";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, List, ListItem, Page, Popup, Toolbar } from "konsta/react";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FormLabel } from "../../ui/form-label";

interface Props {
  card: Card | undefined;
  close: () => void;
}

const CardSchema = z.object({
  id: z.string(),
  title: z.string().min(3).max(50),
  bank: z.string(),
});

type CardSchemaType = z.infer<typeof CardSchema>;

export const EditCard = ({ card, close }: Props) => {
  const { updateCard } = useCardsStore();

  const {
    control,
    formState: { errors },
    handleSubmit,
    clearErrors,
    reset,
  } = useForm<CardSchemaType>({
    defaultValues: card,
    resolver: zodResolver(CardSchema),
  });

  const resetForm = () => {
    reset(card);
    clearErrors();
  };

  const cancelHandler = () => {
    close();
  };

  const submitHandler = () => {
    return handleSubmit((data) => {
      updateCard(data);
      close();
    })();
  };

  useEffect(() => {
    if (card) {
      resetForm();
    }
  }, [card]);

  return (
    <>
      {createPortal(
        <Popup opened={Boolean(card)} className="z-40">
          <Page>
            <Toolbar top>
              <Link toolbar onClick={cancelHandler}>
                Отмена
              </Link>
              <b>Редактирование карты</b>
              <Link toolbar onClick={submitHandler}>
                Готово
              </Link>
            </Toolbar>
            <List strong inset>
              <ListInputControlled
                media={<FormLabel>Название</FormLabel>}
                type="text"
                placeholder="Обязательное поле"
                control={control}
                name="title"
                error={errors.title?.message}
              />
              <ListItem
                media={<ListItemIcon src={getBankFromId(card?.bank)?.icon} />}
                title={card?.title}
              />
            </List>
          </Page>
        </Popup>,
        document.body
      )}
    </>
  );
};
