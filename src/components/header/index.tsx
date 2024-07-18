import { useCardsStore } from "@/stores";
import { Card } from "@/stores/cards-store";
import { getBankFromId } from "@/stores/cards-store/helpers";
import { ListItemIcon } from "@/ui/list-item-icon";
import { SwipeableListItem } from "@/ui/swipeable-list-item";
import { Link, List, Navbar, Page, Popup } from "konsta/react";
import { useState } from "react";
import { IoCardOutline } from "react-icons/io5";
import { AddCard } from "../add-card";
import { EditCashbackPopup } from "../edit-cashback-popup";
import { FaCircle } from "react-icons/fa";
import { EditCard } from "../edit-card";

type Props = {
  subnavbar?: React.ReactNode;
};

export const Header = ({ subnavbar }: Props) => {
  const [cadsPopupOpened, setCardsPopupOpened] = useState(false);
  const [addCardPopupOpened, setAddCardPopupOpened] = useState(false);
  const { cards, removeCard } = useCardsStore();
  const [cashbackPopupOpened, setCashbackPopupOpened] = useState<false | Card>(
    false
  );

  const [editCard, setEditCard] = useState<Card | undefined>(undefined);

  return (
    <>
      <Navbar
        centerTitle={false}
        className="top-0 sticky"
        transparent
        left={
          <div className="flex flex-row items-center">
            <FaCircle size={30} />
            <div className="ml-1 font-semibold">cashb</div>
          </div>
        }
        right={
          <div className="flex flex-row items-center">
            {!cards.length && <div className="mr-2">управление картами 👉</div>}
            <Link
              navbar
              onClick={() => {
                if (cards.length) {
                  setCardsPopupOpened(true);

                  return;
                }

                setAddCardPopupOpened(true);
              }}
            >
              <IoCardOutline size={24} />
            </Link>
          </div>
        }
        subnavbar={subnavbar}
      />
      <Popup
        opened={cadsPopupOpened}
        onBackdropClick={() => setCardsPopupOpened(false)}
        className="z-20"
      >
        <Page>
          <Navbar
            title="Карты"
            right={
              <Link navbar onClick={() => setCardsPopupOpened(false)}>
                Закрыть
              </Link>
            }
          />
          <List strong inset>
            {cards.map((card) => {
              const bank = getBankFromId(card.bank);

              return (
                <SwipeableListItem
                  media={<ListItemIcon src={bank?.icon} />}
                  title={card.title}
                  link
                  key={card.id}
                  onDelete={() => removeCard(card.id)}
                  onEdit={() => setEditCard(card)}
                  onClick={() => setCashbackPopupOpened(card)}
                />
              );
            })}
            <AddCard
              popupOpened={addCardPopupOpened}
              setPopupOpened={setAddCardPopupOpened}
            />
          </List>
        </Page>
      </Popup>

      <EditCard card={editCard} close={() => setEditCard(undefined)} />

      <EditCashbackPopup
        isOpened={cashbackPopupOpened}
        close={() => setCashbackPopupOpened(false)}
      />
    </>
  );
};
