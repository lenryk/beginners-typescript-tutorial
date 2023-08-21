import { expect, it } from "vitest";

interface User {
  id: string;
  firstName: string;
  lastName: string;
}

const createThenGetUser = async (
  // we use function types to say the function returns a promise of a string
  // async function = returns promise
  createUser: () => Promise<string>,
  // the other function returns a promise of User
  getUser: (id: string) => Promise<User>,
): Promise<User> => {
  const userId: string = await createUser();

  const user = await getUser(userId);

  return user;
};

it("Should create the user, then get them", async () => {
  const user = await createThenGetUser(
    async () => "123",
    async (id) => ({
      id,
      firstName: "Matt",
      lastName: "Pocock",
    }),
  );

  expect(user).toEqual({
    id: "123",
    firstName: "Matt",
    lastName: "Pocock",
  });
});
