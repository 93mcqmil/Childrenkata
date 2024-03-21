import { ReactNode } from "react";

type TextProps = {
  children: ReactNode;
};

const Text = ({ children }: TextProps) => {
  return <div className='text'>{children}</div>;
};
export default Text;
