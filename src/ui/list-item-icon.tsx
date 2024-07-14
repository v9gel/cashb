type Props = {
  src?: string;
};

export const ListItemIcon = ({ src }: Props) => (
  <img src={src} width={24} height={24} alt="icon" className="w-6 h-6" />
);
