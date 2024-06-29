interface Props {
  children: string;
}

export const Label = ({ children }: Props) => {
  return <div className="w-16 mr-6">{children}</div>;
};
