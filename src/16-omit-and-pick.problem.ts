import { Equal, Expect } from "./helpers/type-utils";

interface User {
  id: string;
  firstName: string;
  lastName: string;
}

/**
 * How do we create a new object type with _only_ the
 * firstName and lastName properties of User?
 */
// Use the Pick utility to reference our User interface and pick which props we want
type MyType = Pick<User, "firstName" | "lastName">;
// We could have also used Omit<> to omit just the id

type tests = [Expect<Equal<MyType, { firstName: string; lastName: string }>>];
