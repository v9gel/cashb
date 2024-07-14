import { deleteIcon24, editIcon24 } from "@/assets/icons";
import { ListItem } from "konsta/react";
import SwipeToRevealActions from "react-swipe-to-reveal-actions";

type ListItemProps = React.ComponentProps<typeof ListItem>;

type Props = {
  onDelete?: () => void;
  onEdit?: () => void;
} & ListItemProps;

export const SwipeableListItem = (props: Props) => {
  const { onDelete, onEdit, ...restProps } = props;

  const actionButtons = [];

  if (onEdit) {
    actionButtons.push({
      content: (
        <div className="flex bg-orange-500 h-full flex-col justify-center items-center">
          <img src={editIcon24} width={18} height={18} alt="delete icon" />
          <span className="text-white text-sm">Изменить</span>
        </div>
      ),
      onClick: onEdit,
    });
  }

  if (onDelete) {
    actionButtons.push({
      content: (
        <div className="flex bg-red-500 h-full flex-col justify-center items-center">
          <img src={deleteIcon24} width={18} height={18} alt="delete icon" />
          <span className="text-white text-sm">Удалить</span>
        </div>
      ),
      onClick: onDelete,
    });
  }

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
      <ListItem {...restProps} className="w-full" />
    </SwipeToRevealActions>
  );
};
