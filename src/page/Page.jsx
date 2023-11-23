import React, { useState } from "react";
import "./Page.css";
import ApiData from "../components/apidata/ApiData";

function Page() {
  const [optionSelected, setOptionSelected] = useState([]);
  const handleChange = (option) => {
    if (optionSelected.includes(option)) {
      setOptionSelected(optionSelected.filter((element) => element !== option));
    } else {
      setOptionSelected([...optionSelected, option]);
    }
  };

  return (
    <div className="container">
      <h1>checkbox options</h1>
      <div>
        <label>
          <input
            type="checkbox"
            checked={optionSelected.includes("sma")}
            onChange={() => handleChange("sma")}
          />
          sma
        </label>
        <label>
          <input
            type="checkbox"
            checked={optionSelected.includes("stoc")}
            onChange={() => handleChange("stoc")}
          />
          stoc
        </label>
        <label>
          <input
            type="checkbox"
            checked={optionSelected.includes("macd")}
            onChange={() => handleChange("macd")}
          />
          macd
        </label>
        <label>
          <input
            type="checkbox"
            checked={optionSelected.includes("rsi")}
            onChange={() => handleChange("rsi")}
          />
          rsi
        </label>
        <label>
          <input
            type="checkbox"
            checked={optionSelected.includes("bollinger")}
            onChange={() => handleChange("bollinger")}
          />
          bollinger
        </label>
      </div>
      <ApiData options={optionSelected} />
    </div>
  );
}

export default Page;
