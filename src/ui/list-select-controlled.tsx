import {
  Link,
  List,
  ListItem,
  Navbar,
  Page,
  Popup,
  Searchbar,
} from "konsta/react";
import { useState } from "react";
import { Controller, Control, FieldValues, FieldPath } from "react-hook-form";
import { ListItemIcon } from "./list-item-icon";
import { createPortal } from "react-dom";
import { checkIcon24 } from "@/assets/icons";

type SelectProps = {
  label: string;
  items: {
    id: string;
    name: string;
    icon: string;
  }[];
};

export type Props<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
  name: TName;
  control: Control<TFieldValues>;
} & SelectProps;

export const ListSelectControlled = <T extends FieldValues>(
  props: Props<T>
) => {
  const { control, name, label, items } = props;

  const [popupOpened, setPopupOpened] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = (e: any) => {
    setSearchQuery(e.target.value);
  };
  const handleClear = () => {
    setSearchQuery("");
  };
  const handleDisable = () => {
    console.log("Disable");
  };

  const filteredItems = searchQuery
    ? items.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : items;

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange } }) => {
        const fullValue = items.find((item) => item.id === value);

        return (
          <>
            <ListItem
              media={<div className="w-16 mr-6">{label}</div>}
              title={
                <div className="flex flex-row">
                  <ListItemIcon src={fullValue?.icon} />
                  <div className="ml-4">{fullValue?.name}</div>
                </div>
              }
              link
              onClick={() => setPopupOpened(true)}
            />
            {createPortal(
              <Popup
                opened={popupOpened}
                onBackdropClick={() => setPopupOpened(false)}
                className="z-50"
              >
                <Page>
                  <Navbar
                    title={label}
                    right={
                      <Link navbar onClick={() => setPopupOpened(false)}>
                        Закрыть
                      </Link>
                    }
                    subnavbar={
                      <Searchbar
                        onInput={handleSearch}
                        value={searchQuery}
                        onClear={handleClear}
                        disableButton
                        disableButtonText="Отмена"
                        onDisable={handleDisable}
                        placeholder={"Поиск"}
                      />
                    }
                  />
                  <List strong insetMaterial outlineIos>
                    {filteredItems.length === 0 ? (
                      <ListItem
                        title="Ничего не найдено"
                        className="text-center"
                      />
                    ) : (
                      filteredItems.map((item) => (
                        <ListItem
                          key={item.id}
                          media={<ListItemIcon src={item.icon} />}
                          title={item.name}
                          onClick={() => {
                            onChange(item.id);
                            setPopupOpened(false);
                          }}
                          after={
                            value === item.id && (
                              <img
                                src={checkIcon24}
                                width={20}
                                height={20}
                                alt="check icon"
                              />
                            )
                          }
                          className="cursor-pointer"
                        />
                      ))
                    )}
                  </List>
                </Page>
              </Popup>,
              document.body
            )}
          </>
        );
      }}
    />
  );
};
