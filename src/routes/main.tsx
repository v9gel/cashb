import addCircle24Icon from "@/assets/icons/add-circle-24.svg";
import { AddEditCardSheet } from "@/components/add-edit-card-sheet";
import { useCardsStore } from "@/stores";
import { getBankFromId } from "@/stores/cards-store/helpers";
import { SwipeableListItem } from "@/ui/swipeable-list-item";
import { BlockTitle, List, ListItem, Page } from "konsta/react";
import { useState } from "react";

export const Main = () => {
  const [sheetOpened, setSheetOpened] = useState(false);
  const { cards, removeCard } = useCardsStore();

  return (
    <Page>
      <BlockTitle>Карты</BlockTitle>
      <List strongIos outlineIos insetIos>
        {cards.map((card) => {
          const bank = getBankFromId(card.bank);

          return (
            <SwipeableListItem
              media={bank?.logo}
              title={card.title}
              link
              key={card.id}
              onDelete={() => removeCard(card.id)}
            />
          );
        })}
        <ListItem
          media={
            <img
              src={addCircle24Icon}
              width={28}
              height={28}
              alt="add circle icon"
            />
          }
          title="Добавить карту..."
          onClick={() => setSheetOpened(true)}
        />
      </List>
      <AddEditCardSheet
        isOpened={sheetOpened}
        close={() => setSheetOpened(false)}
      />
    </Page>
  );
};
