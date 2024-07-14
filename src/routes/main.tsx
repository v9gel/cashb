import { AddCard } from "@/components/add-card";
import { EditCashbackPopup } from "@/components/edit-cashback-popup";
import { useCardsStore } from "@/stores";
import { getBankFromId } from "@/stores/cards-store/helpers";
import { Card } from "@/stores/cards-store/types";
import { ListItemIcon } from "@/ui/list-item-icon";
import { SwipeableListItem } from "@/ui/swipeable-list-item";
import { Badge, BlockTitle, List, Page } from "konsta/react";
import { useState } from "react";

export const Main = () => {
  const { cards, removeCard } = useCardsStore();
  const [cashbackPopupOpened, setCashbackPopupOpened] = useState<false | Card>(
    false
  );

  return (
    <Page>
      <BlockTitle>Карты</BlockTitle>
      <List strongIos outlineIos insetIos>
        {cards.map((card) => {
          const bank = getBankFromId(card.bank);

          return (
            <SwipeableListItem
              media={<ListItemIcon src={bank?.icon} />}
              title={card.title}
              link
              key={card.id}
              onDelete={() => removeCard(card.id)}
              after={<Badge>Не выбран</Badge>}
              onClick={() => setCashbackPopupOpened(card)}
            />
          );
        })}
        <AddCard />
      </List>
      <EditCashbackPopup
        isOpened={cashbackPopupOpened}
        close={() => setCashbackPopupOpened(false)}
      />
    </Page>
  );
};
