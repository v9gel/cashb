interface Props {
  children: string;
}

export const FormLabel = ({ children }: Props) => {
  return <div className="w-16 mr-6">{children}</div>;
};
