import React from "react";

interface Helloprops {
  message?: string;
}
const Hello: React.FC<Helloprops> = (props) => {
  return <h2>{props.message}</h2>;
};

Hello.defaultProps = {
  message: "Hello world",
};

export default Hello;
