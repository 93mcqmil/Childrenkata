import { ReactNode } from "react";

type BorderProps = {
  children: ReactNode;
};

const Border = ({ children }: BorderProps) => {
  return (
    <>
      <div style={{ border: "1px solid red" }}></div>
      {children}
    </>
  );
};
export default Border;
