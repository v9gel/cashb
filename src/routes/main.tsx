import { AddCard } from "@/components/add-card";
import { AddPoint } from "@/components/add-point";
import { EditCashbackPopup } from "@/components/edit-cashback-popup";
import { useCardsStore } from "@/stores";
import { getBankFromId } from "@/stores/cards-store/helpers";
import { Card } from "@/stores/cards-store/types";
import { usePointsStore } from "@/stores/points-store/store";
import { ListItemIcon } from "@/ui/list-item-icon";
import { SwipeableListItem } from "@/ui/swipeable-list-item";
import { BlockTitle, List, ListItem, Page } from "konsta/react";
import { useState } from "react";

export const Main = () => {
  const { cards, removeCard } = useCardsStore();
  const [cashbackPopupOpened, setCashbackPopupOpened] = useState<false | Card>(
    false
  );

  const { points } = usePointsStore();

  return (
    <Page>
      <BlockTitle>Мои карты</BlockTitle>
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
              onClick={() => setCashbackPopupOpened(card)}
            />
          );
        })}
        <AddCard />
      </List>

      <BlockTitle>Мои точки</BlockTitle>
      <List strongIos outlineIos insetIos>
        <AddPoint />

        {points.map((point) => {
          return <ListItem title={point.name} link key={point.id} />;
        })}
      </List>

      <EditCashbackPopup
        isOpened={cashbackPopupOpened}
        close={() => setCashbackPopupOpened(false)}
      />
    </Page>
  );
};
