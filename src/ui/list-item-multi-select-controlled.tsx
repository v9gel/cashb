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
import { IoCheckmark } from "react-icons/io5";

type SelectProps = {
  label: string;
  items: {
    id: string;
    name: string;
    icon?: string;
  }[];
  hideIcon?: boolean;
};

export type Props<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
  name: TName;
  control: Control<TFieldValues>;
} & SelectProps;

export const ListItemMultiSelectControlled = <T extends FieldValues>(
  props: Props<T>
) => {
  const { control, name, label, items, hideIcon } = props;

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
        return (
          <>
            <ListItem
              title={
                <div className="flex flex-row">
                  {label}
                  {": "}
                  {value.length ? "Выбрано " + value.length : "Не выбрано"}
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
                          media={!hideIcon && <ListItemIcon src={item.icon} />}
                          title={item.name}
                          onClick={() => {
                            if (
                              value.find(
                                (_item: { id: string }) => _item.id === item.id
                              )
                            ) {
                              onChange(
                                value.filter(
                                  (_item: { id: string }) =>
                                    _item.id !== item.id
                                )
                              );

                              return;
                            }

                            onChange([...value, item]);
                          }}
                          after={
                            value.find(
                              (_item: { id: string }) => _item.id === item.id
                            ) && <IoCheckmark />
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
