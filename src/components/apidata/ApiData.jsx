import React from "react";
import Button from "../button/Button";
import axiosInstance from "../../utilities/axios";

const ApiData = ({ options }) => {
  function data() {
    const eachOption = options.map((each) => ({ ind: each }));
    axiosInstance
      .post("/", {
        data: eachOption.map((each) => each),
      })
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  }

  return (
    <div style={{ marginTop: "15px" }}>
      <Button onclick={data} value={"Send Data"} />
    </div>
  );
};

export default ApiData;

// const data = async () => {
//   await fetch("http://136.243.50.33:5001", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ ind: options }),
//   })
//     .then((response) => response.json())
//     // .then((data) => console.log(data))
//     .catch((error) => console.log(error));
// };
