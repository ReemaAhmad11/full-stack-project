import React from "react";

const Test = () => {
  const data = {
    productName: "try",
    productDescription: "try",
    productPrice: 23432434,
    productType: "Sweet",
  };

  fetch("http://localhost:5001/api/v1/item", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });

  // fetch("http://localhost:5001/api/v1/item", {
  //   headers: {
  //     "Content-Type": "application/json",
  //     Authorization: "Bearer " + localStorage.getItem("token"),
  //   },
  // })
  //   .then((response) => response.json())

  //   .then((data) => {
  //     console.log(data);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  return <div>test</div>;
};

export default Test;
