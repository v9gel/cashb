import { AddPoint } from "@/components/add-point";
import { DetailPointPopup } from "@/components/detail-point-popup";
import { EditPoint } from "@/components/edit-point";
import { Header } from "@/components/header";
import { Point } from "@/stores/points-store";
import { usePointsStore } from "@/stores/points-store/store";
import { SwipeableListItem } from "@/ui/swipeable-list-item";
import {
  BlockTitle,
  Card,
  List,
  ListItem,
  Page,
  Searchbar,
} from "konsta/react";
import { useState } from "react";

const BLOCK_POINTS_COUNT = 5;

export const Main = () => {
  const [pointPopupOpened, setPointPopupOpened] = useState<false | Point>(
    false
  );
  const [editPoint, setEditPoint] = useState<Point | undefined>(undefined);

  const { points, removePoint, lastViewIds } = usePointsStore();

  const lastViewPoints = lastViewIds
    .slice(0, BLOCK_POINTS_COUNT)
    .map((lastViewId) => points.find((point) => point.id === lastViewId))
    .filter((point) => point !== undefined);

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: any) => {
    setSearchQuery(e.target.value);
  };
  const handleClear = () => {
    setSearchQuery("");
  };

  const filteredPoints = searchQuery.length
    ? points.filter((point) =>
        point.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : points;

  const [showFiltred, setShowFiltred] = useState(false);
  const handleDisable = () => {
    setShowFiltred(false);
  };

  return (
    <Page>
      <Header
        subnavbar={
          points.length ? (
            <Searchbar
              onInput={handleSearch}
              value={searchQuery}
              onClear={handleClear}
              placeholder={"Поиск по всем точкам"}
              onDisable={handleDisable}
              disableButton
              disableButtonText="Отмена"
              onFocus={() => {
                setShowFiltred(true);
              }}
              onBlur={() => {
                if (!searchQuery) {
                  setShowFiltred(false);
                }
              }}
              id="points-searchbar"
            />
          ) : undefined
        }
      />
      {showFiltred ? (
        <>
          <List strong inset>
            {Boolean(filteredPoints.length) && (
              <>
                {filteredPoints.map((point) => {
                  return (
                    <SwipeableListItem
                      title={point.name}
                      link
                      key={point.id}
                      onClick={() => setPointPopupOpened(point)}
                      onDelete={() => removePoint(point.id)}
                      onEdit={() => setEditPoint(point)}
                    />
                  );
                })}
              </>
            )}
            {!filteredPoints.length && (
              <ListItem title="По этому запросу нет точек 😔" />
            )}
          </List>
        </>
      ) : (
        <>
          {Boolean(points.length) && (
            <>
              <BlockTitle>Недавно добавленные</BlockTitle>
              <List strong inset>
                {points.slice(0, BLOCK_POINTS_COUNT).map((point) => {
                  return (
                    <SwipeableListItem
                      title={point.name}
                      link
                      key={point.id}
                      onClick={() => setPointPopupOpened(point)}
                      onDelete={() => removePoint(point.id)}
                      onEdit={() => setEditPoint(point)}
                    />
                  );
                })}
              </List>
            </>
          )}

          {Boolean(lastViewPoints.length) && (
            <>
              <BlockTitle>Недавно просмотренные</BlockTitle>
              <List strong inset>
                {lastViewPoints.map((point) => {
                  return (
                    <SwipeableListItem
                      title={point.name}
                      link
                      key={point.id}
                      onClick={() => setPointPopupOpened(point)}
                      onDelete={() => removePoint(point.id)}
                      onEdit={() => setEditPoint(point)}
                    />
                  );
                })}
              </List>
            </>
          )}
        </>
      )}

      {!points.length && (
        <Card header="Привет 👋">
          <p>Вот несколько советов, которые помогут тебе здесь освоиться:</p>
          <ul className="list-disc pl-4">
            <li className="list-disc pt-2">
              добавить точку можно с помощью кнопки в правом нижнем углу
            </li>
            <li className="list-disc pt-2">
              для управления картами и кэшбэком по каждой из них нажмите
            </li>
          </ul>
        </Card>
      )}

      <AddPoint />
      <EditPoint point={editPoint} close={() => setEditPoint(undefined)} />
      <DetailPointPopup
        isOpened={pointPopupOpened}
        close={() => setPointPopupOpened(false)}
      />
    </Page>
  );
};
