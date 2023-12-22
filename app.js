import React from "react";
import ReactDOM from "react-dom";

const element = React.createElement("h1", {}, "hello everyone");
const Testing = () => {
  return <h1>jsx is connecteddd</h1>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Testing />);
