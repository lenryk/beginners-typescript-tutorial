import { Equal, Expect } from "./helpers/type-utils";

/**
 * How do we type onFocusChange?
 */
// here we add a function type to say the function accepts a boolean and returns void
// we could also extract this into its own type
const addListener = (onFocusChange: (isFocused: boolean) => void) => {
  window.addEventListener("focus", () => {
    onFocusChange(true);
  });

  window.addEventListener("blur", () => {
    onFocusChange(false);
  });
};

addListener((isFocused) => {
  console.log({ isFocused });

  type tests = [Expect<Equal<typeof isFocused, boolean>>];
});
