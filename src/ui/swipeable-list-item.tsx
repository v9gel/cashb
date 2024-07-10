import { ListItem } from "konsta/react";
import SwipeToRevealActions from "react-swipe-to-reveal-actions";
import delete24Icon from "@/assets/icons/delete-24.svg";
import edit24Icon from "@/assets/icons/edit-24.svg";

type ListItemProps = React.ComponentProps<typeof ListItem>;

type Props = {
  onDelete: () => void;
  onEdit: () => void;
} & ListItemProps;

export const SwipeableListItem = (props: Props) => {
  const { onDelete, onEdit, ...restProps } = props;

  return (
    <SwipeToRevealActions
      actionButtons={[
        {
          content: (
            <div className="flex bg-orange-500 h-full flex-col justify-center items-center">
              <img src={edit24Icon} width={18} height={18} alt="delete icon" />
              <span className="text-white text-sm">Изменить</span>
            </div>
          ),
          onClick: onEdit,
        },
        {
          content: (
            <div className="flex bg-red-500 h-full flex-col justify-center items-center">
              <img
                src={delete24Icon}
                width={18}
                height={18}
                alt="delete icon"
              />
              <span className="text-white text-sm">Удалить</span>
            </div>
          ),
          onClick: onDelete,
        },
      ]}
      containerStyle={{
        display: "flex",
      }}
      hideDotsButton
      height={"45.5px"}
      actionButtonMinWidth={70}
    >
      <ListItem {...restProps} className="w-full" />
    </SwipeToRevealActions>
  );
};
