import { useCardsStore } from "@/stores";
import { getBankFromId } from "@/stores/cards-store/helpers";
import { getCategoryById } from "@/stores/cashback-store";
import { useCashbackStore } from "@/stores/cashback-store/store";
import { Point, usePointsStore } from "@/stores/points-store";
import { ListItemIcon } from "@/ui/list-item-icon";
import {
  Badge,
  BlockHeader,
  Link,
  List,
  ListItem,
  Navbar,
  Page,
  Popup,
} from "konsta/react";
import { useEffect, useRef } from "react";

interface Props {
  isOpened: false | Point;
  close: () => void;
}

export const DetailPointPopup = ({ isOpened, close }: Props) => {
  const date = new Date();
  const curMonth = date.getFullYear() * 100 + date.getMonth();
  const maxPercent = useRef(0);

  let point: Point | undefined = undefined;
  if (isOpened) {
    point = isOpened;
    maxPercent.current = 0;
  }

  const cancelHandler = () => {
    close();
  };

  const { cards } = useCardsStore();
  const { getCashback } = useCashbackStore();
  const cardsWithPercents = cards
    .map((card) => {
      if (point?.mcc) {
        const cashback = getCashback({ cardId: card.id, month: curMonth });

        const percentedCategory =
          cashback?.categories
            .filter((_category) => {
              const category = getCategoryById(_category.id);

              return (
                category?.mcc.includes(point.mcc) ||
                category?.mcc
                  .filter((_mcc) => Array.isArray(_mcc))
                  .some(([first, second]) => {
                    return first <= point.mcc && point.mcc <= second;
                  })
              );
            })
            .sort((a, b) => -((a?.percent ?? 0) - (b?.percent ?? 0)))[0] ??
          undefined;

        if (maxPercent.current < (percentedCategory?.percent ?? 0)) {
          maxPercent.current = percentedCategory?.percent ?? 0;
        }

        return {
          ...card,
          percent: percentedCategory?.percent ?? 0,
        };
      }
    })
    .filter((card) => card?.percent);

  const { markView } = usePointsStore();
  useEffect(() => {
    if (point) {
      markView(point.id);
    }
  }, [point]);

  return (
    <Popup opened={Boolean(isOpened)}>
      <Page>
        <Navbar
          title={point?.name}
          right={
            <Link navbar onClick={cancelHandler}>
              Закрыть
            </Link>
          }
        />
        <BlockHeader>Кэшбэк по картам</BlockHeader>
        <List strong inset>
          {cardsWithPercents
            .sort((a, b) => -((a?.percent ?? 0) - (b?.percent ?? 0)))
            .map((card) => {
              return (
                <ListItem
                  media={<ListItemIcon src={getBankFromId(card?.bank)?.icon} />}
                  title={card?.title}
                  key={card?.id}
                  after={
                    card?.percent ? (
                      <Badge
                        colors={
                          maxPercent.current === card.percent
                            ? { bg: "bg-red-500" }
                            : undefined
                        }
                      >
                        {card.percent}%
                      </Badge>
                    ) : undefined
                  }
                />
              );
            })}
          {!cardsWithPercents.length && (
            <ListItem title="Здесь нет кэшбэка 😔" />
          )}
        </List>
      </Page>
    </Popup>
  );
};
