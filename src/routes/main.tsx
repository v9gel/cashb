import { AddPoint } from "@/components/add-point";
import { DetailPointPopup } from "@/components/detail-point-popup";
import { Header } from "@/components/header";
import { Point } from "@/stores/points-store";
import { usePointsStore } from "@/stores/points-store/store";
import { SwipeableListItem } from "@/ui/swipeable-list-item";
import { List, Page } from "konsta/react";
import { useState } from "react";

export const Main = () => {
  const [pointPopupOpened, setPointPopupOpened] = useState<false | Point>(
    false
  );

  const { points, removePoint } = usePointsStore();

  return (
    <Page>
      <Header />
      {Boolean(points.length) && (
        <List strongIos outlineIos insetIos>
          {points.map((point) => {
            return (
              <SwipeableListItem
                title={point.name}
                link
                key={point.id}
                onClick={() => setPointPopupOpened(point)}
                onDelete={() => removePoint(point.id)}
              />
            );
          })}
        </List>
      )}
      <AddPoint />
      <DetailPointPopup
        isOpened={pointPopupOpened}
        close={() => setPointPopupOpened(false)}
      />
    </Page>
  );
};
