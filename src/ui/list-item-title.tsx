interface Props {
  media?: React.ReactNode;
  title?: React.ReactNode;
}

export const ListItemTitle = ({ title, media }: Props) => {
  return (
    <div className="flex flex-row items-center">
      {media}
      <div className="ml-2">{title}</div>
    </div>
  );
};
