import React from "react";

export const Practice = () => {
  // closures
  const counter = () => {
    let count = 1;
    return () => {
      count++;
      return count;
    };
  };
  const counter1 = counter();
  counter1()

  console.log(counter1);

  return <div>{counter1()}</div>;
};
