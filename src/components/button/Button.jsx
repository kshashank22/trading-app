import React from "react";

const Button = ({ onclick, value }) => {
  return (
    <div>
      <button onClick={onclick}>{value}</button>
    </div>
  );
};

export default Button;
