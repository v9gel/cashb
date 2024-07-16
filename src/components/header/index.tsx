import { cashbLogo } from "@/assets/icons";
import { useCardsStore } from "@/stores";
import { Card } from "@/stores/cards-store";
import { getBankFromId } from "@/stores/cards-store/helpers";
import { ListItemIcon } from "@/ui/list-item-icon";
import { SwipeableListItem } from "@/ui/swipeable-list-item";
import { Link, List, Navbar, Popup } from "konsta/react";
import { useState } from "react";
import { IoCardOutline } from "react-icons/io5";
import { AddCard } from "../add-card";
import { EditCashbackPopup } from "../edit-cashback-popup";

export const Header = () => {
  const [cadsPopupOpened, setCardsPopupOpened] = useState(false);
  const [addCardPopupOpened, setAddCardPopupOpened] = useState(false);
  const { cards, removeCard } = useCardsStore();
  const [cashbackPopupOpened, setCashbackPopupOpened] = useState<false | Card>(
    false
  );

  return (
    <>
      <Navbar
        centerTitle={false}
        className="top-0 sticky"
        transparent
        left={
          <div className="flex flex-row items-center">
            <img src={cashbLogo} width={30} height={30} />
            <div className="ml-2 font-semibold">cashb</div>
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
      />
      <Popup
        opened={cadsPopupOpened}
        onBackdropClick={() => setCardsPopupOpened(false)}
        className="z-20"
      >
        <Navbar
          title="Мои карты"
          right={
            <Link navbar onClick={() => setCardsPopupOpened(false)}>
              Закрыть
            </Link>
          }
        />
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
          <AddCard
            popupOpened={addCardPopupOpened}
            setPopupOpened={setAddCardPopupOpened}
          />
        </List>
      </Popup>

      <EditCashbackPopup
        isOpened={cashbackPopupOpened}
        close={() => setCashbackPopupOpened(false)}
      />
    </>
  );
};
