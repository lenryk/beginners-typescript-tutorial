import { expect, it } from "vitest";

// example of extracting our types into an interface
interface AddTwoNumbers {
  first: number
  second: number
}

// we can add inline type annotations or pull them out into an interface / type instead
export const addTwoNumbers = (params: {first: number, second: number}) => {
  return params.first + params.second;
};

it("Should add the two numbers together", () => {
  expect(
    addTwoNumbers({
      first: 2,
      second: 4,
    }),
  ).toEqual(6);

  expect(
    addTwoNumbers({
      first: 10,
      second: 20,
    }),
  ).toEqual(30);
});
