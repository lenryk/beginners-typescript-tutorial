import { expect, it } from "vitest";

const coerceAmount = (amount: number | { amount: number }) => {
  // add a type guard to check if the param is of type number
  if(typeof amount === "number") {
    return amount
  } else {
    // if it is not of type number then we know it's an object
    return amount.amount
  }
};

it("Should return the amount when passed an object", () => {
  expect(coerceAmount({ amount: 20 })).toEqual(20);
});

it("Should return the amount when passed a number", () => {
  expect(coerceAmount(20)).toEqual(20);
});
