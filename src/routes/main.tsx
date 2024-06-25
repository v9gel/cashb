import { BlockTitle, List, ListItem, Page } from "konsta/react";
import alfabankLogo from "@/assets/banks/alfabank.svg";
import ozonLogo from "@/assets/banks/ozon.svg";
import yandexLogo from "@/assets/banks/yandex.svg";
import tbankLogo from "@/assets/banks/tbank.svg";
import addCircle24Icon from "@/assets/icons/add-circle-24.svg";

export const Main = () => {
  return (
    <Page>
      <BlockTitle>Карты</BlockTitle>
      <List strongIos outlineIos insetIos>
        <ListItem
          media={
            <img
              src={alfabankLogo}
              width={28}
              height={28}
              alt="alfabank logo"
            />
          }
          title="Альфабанк"
          link
        />
        <ListItem
          media={<img src={ozonLogo} width={28} height={28} alt="ozon logo" />}
          title="Озон"
          link
        />
        <ListItem
          media={
            <img src={yandexLogo} width={28} height={28} alt="yandex logo" />
          }
          title="Яндекс"
          link
        />
        <ListItem
          media={
            <img src={tbankLogo} width={28} height={28} alt="tbank logo" />
          }
          title="Т-Банк"
          link
        />
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
        />
      </List>
    </Page>
  );
};
