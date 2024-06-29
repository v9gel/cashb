import { useCardsStore } from "@/stores";
import { genCardId, getBankFromId } from "@/stores/cards-store/helpers";
import { BANKS } from "@/stores/cards-store/types";
import { ListInputControlled } from "@/ui/list-input-controlled";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Link,
  List,
  ListItem,
  NavbarBackLink,
  Searchbar,
  Sheet,
  Toolbar,
} from "konsta/react";
import { nanoid } from "nanoid";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Label } from "./label";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import "swiper/css";

interface Props {
  isOpened: boolean;
  close: () => void;
}

const CardSchema = z.object({
  id: z.string(),
  title: z.string().min(3).max(50),
  bank: z.string(),
});

type CardSchemaType = z.infer<typeof CardSchema>;

const defaultValues = { id: genCardId(), title: "", bank: BANKS[0].id };

export const AddEditCardSheet = ({ isOpened, close }: Props) => {
  const { addCard } = useCardsStore();
  const firstInputId = useRef("first-input-" + nanoid());

  const {
    control,
    formState: { errors },
    handleSubmit,
    clearErrors,
    reset,
    setValue,
    watch,
  } = useForm<CardSchemaType>({
    defaultValues: defaultValues,
    resolver: zodResolver(CardSchema),
  });

  const resetForm = () => {
    defaultValues.id = genCardId();

    reset(defaultValues);
    clearErrors();
  };

  const cancelHandler = () => {
    resetForm();
    close();
  };

  const submitHandler = () => {
    return handleSubmit((data) => {
      addCard(data);
      resetForm();
      close();
    })();
  };

  useEffect(() => {
    if (isOpened) {
      // пока что костыль с фокусом через id, тк konsta не отдает ref
      // setFocus("title");
      document.getElementById(firstInputId.current)?.focus();
    }
  }, [isOpened]);

  const swiperRef = useRef<SwiperRef>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };
  const handleClear = () => {
    setSearchQuery("");
  };
  const handleDisable = () => {
    console.log("Disable");
  };
  const filteredItems = searchQuery
    ? BANKS.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : BANKS;

  const selectedBankId = watch("bank");
  const selectedBank = getBankFromId(selectedBankId);

  return (
    <Sheet
      className="pb-safe w-full"
      opened={isOpened}
      onBackdropClick={cancelHandler}
      autoFocus
    >
      <div className="bg-ios-light-surface h-full overflow-auto">
        <Swiper slidesPerView={1} ref={swiperRef}>
          <SwiperSlide>
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
                media={<Label>Название</Label>}
                type="text"
                placeholder="Обязательное поле"
                control={control}
                name="title"
                error={errors.title?.message}
                tabIndex={0}
                autoFocus={true}
                inputId={firstInputId.current}
              />
              <ListItem
                media={<Label>Банк</Label>}
                title={
                  <div className="flex flex-row">
                    {selectedBank?.logo}
                    <div className="ml-4">{selectedBank?.name}</div>
                  </div>
                }
                link
                onClick={() => swiperRef.current?.swiper?.slideNext()}
              />
            </List>
          </SwiperSlide>
          <SwiperSlide>
            <Toolbar top>
              <NavbarBackLink
                text="Новая карта"
                onClick={() => swiperRef.current?.swiper?.slidePrev()}
              />
              <b>Банк</b>
              <div></div>
            </Toolbar>
            <Searchbar
              onInput={handleSearch}
              value={searchQuery}
              onClear={handleClear}
              disableButton
              disableButtonText="Cancel"
              onDisable={handleDisable}
            />
            <List strong insetMaterial outlineIos>
              {filteredItems.length === 0 ? (
                <ListItem title="Nothing found" className="text-center" />
              ) : (
                filteredItems.map((item) => (
                  <ListItem
                    key={item.id}
                    media={item.logo}
                    title={item.name}
                    onClick={() => {
                      setValue("bank", item.id);
                      swiperRef.current?.swiper?.slidePrev();
                    }}
                  />
                ))
              )}
            </List>
          </SwiperSlide>
        </Swiper>
      </div>
    </Sheet>
  );
};
