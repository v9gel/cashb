import { useOperatingSystem } from "@siberiacancode/reactuse";
import { List, ListItem, Popover } from "konsta/react";
import { nanoid } from "nanoid";
import { useState } from "react";
import { createPortal } from "react-dom";
import { IoPencil, IoTrashOutline } from "react-icons/io5";
import SwipeToRevealActions from "react-swipe-to-reveal-actions";
import { ListItemTitle } from "./list-item-title";

type ListItemProps = React.ComponentProps<typeof ListItem>;

type Props = {
  onDelete?: () => void;
  onEdit?: () => void;
} & ListItemProps;

export const SwipeableListItem = (props: Props) => {
  const { onDelete, onEdit, title, media, ...restProps } = props;

  const operatingSystem = useOperatingSystem();

  const actionButtons = [];

  if (onEdit) {
    actionButtons.push({
      title: "Изменить",
      icon: <IoPencil />,
      content: (
        <div className="flex bg-orange-500 h-full flex-col justify-center items-center">
          <IoPencil color="white" />
          <span className="text-white text-sm">Изменить</span>
        </div>
      ),
      onClick: onEdit,
    });
  }

  if (onDelete) {
    actionButtons.push({
      title: "Удалить",
      icon: <IoTrashOutline color="red" />,
      content: (
        <div className="flex bg-red-500 h-full flex-col justify-center items-center">
          <IoTrashOutline color="white" />
          <span className="text-white text-sm">Удалить</span>
        </div>
      ),
      onClick: onDelete,
    });
  }

  const [popoverOpened, setPopoverOpened] = useState(false);

  const popoverTarget = `popover-target-${nanoid()}`;

  if (["ios", "android"].includes(operatingSystem)) {
    return (
      <SwipeToRevealActions
        actionButtons={actionButtons}
        containerStyle={{
          display: "flex",
        }}
        hideDotsButton
        height={"45.5px"}
        actionButtonMinWidth={80}
      >
        <ListItem
          {...restProps}
          title={<ListItemTitle title={title} media={media} />}
          className="w-full"
        />
      </SwipeToRevealActions>
    );
  }

  return (
    <>
      <ListItem
        {...restProps}
        title={<ListItemTitle title={title} media={media} />}
        className={`w-full ${popoverTarget}`}
        onContextMenu={(event) => {
          event.preventDefault();
          setPopoverOpened(true);
        }}
      />
      {createPortal(
        <Popover
          opened={popoverOpened}
          target={`.${popoverTarget}`}
          onBackdropClick={() => setPopoverOpened(false)}
          className="z-10"
        >
          <List nested>
            {actionButtons.map((actionButton) => {
              return (
                <ListItem
                  title={
                    <ListItemTitle
                      title={actionButton.title}
                      media={actionButton.icon}
                    />
                  }
                  onClick={() => {
                    actionButton.onClick();
                    setPopoverOpened(false);
                  }}
                  className="cursor-pointer"
                />
              );
            })}
          </List>
        </Popover>,
        document.body
      )}
    </>
  );
};
