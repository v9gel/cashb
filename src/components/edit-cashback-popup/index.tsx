import { Card } from "@/stores/cards-store";
import { getBankFromId } from "@/stores/cards-store/helpers";
import { ListItemIcon } from "@/ui/list-item-icon";
import { add } from "date-fns";
import {
  Link,
  Navbar,
  Page,
  Popup,
  Segmented,
  SegmentedButton,
} from "konsta/react";
import { MothCashbackCategories } from "./month-cashback-categories";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { useRef, useState } from "react";

interface Props {
  isOpened: false | Card;
  close: () => void;
}

export const EditCashbackPopup = ({ isOpened, close }: Props) => {
  const date = new Date();
  const curMonth = date.getFullYear() * 100 + date.getMonth();
  const nextMonthDate = add(date, { months: 1 });
  const nextMonth =
    nextMonthDate.getFullYear() * 100 + nextMonthDate.getMonth();
  const [activeSlide, setActiveSlide] = useState(0);

  let card: Card | undefined = undefined;
  if (isOpened) {
    card = isOpened;
  }

  const cancelHandler = () => {
    close();
  };

  const swiperRef = useRef<SwiperRef>(null);

  return (
    <Popup opened={Boolean(isOpened)} className="z-30">
      <Page>
        <Navbar
          title={
            <div className="flex flex-row">
              <ListItemIcon src={getBankFromId(card?.bank)?.icon} />
              <div className="ml-1"> {card?.title}</div>
            </div>
          }
          right={
            <Link navbar onClick={cancelHandler}>
              Закрыть
            </Link>
          }
          subnavbar={
            <Segmented strong>
              {[date, nextMonthDate].map((value, index) => (
                <SegmentedButton
                  key={index}
                  strong
                  active={activeSlide === index}
                  onClick={() => {
                    swiperRef.current?.swiper.slideTo(index);
                    setActiveSlide(index);
                  }}
                >
                  {format(value, "LLLL", { locale: ru })}
                </SegmentedButton>
              ))}
            </Segmented>
          }
        />
        {card && (
          <>
            <Swiper ref={swiperRef} slidesPerView={1} allowTouchMove={false}>
              <SwiperSlide>
                <MothCashbackCategories
                  month={curMonth}
                  card={card}
                  isOpened={Boolean(isOpened)}
                />
              </SwiperSlide>
              <SwiperSlide>
                <MothCashbackCategories
                  month={nextMonth}
                  card={card}
                  isOpened={Boolean(isOpened)}
                />
              </SwiperSlide>
            </Swiper>
          </>
        )}
      </Page>
    </Popup>
  );
};
