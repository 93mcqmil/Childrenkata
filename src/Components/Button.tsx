import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
};

const Buttons = ({ children }: ButtonProps) => {
  return <div className='buttons'>{children}</div>;
};
export default Buttons;
