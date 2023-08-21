import { expect, it } from "vitest";

const tryCatchDemo = (state: "fail" | "succeed") => {
  try {
    if (state === "fail") {
      throw new Error("Failure!");
    }
  } catch (e) {
    // all errors from catch are unknown
    // we need to add a type guard to check it is an error object so we can access the message prop
    if(e instanceof Error) {
      return e.message;
    }
    // add fallback here in case it is not an error object
  }
};

it("Should return the message when it fails", () => {
  expect(tryCatchDemo("fail")).toEqual("Failure!");
});
