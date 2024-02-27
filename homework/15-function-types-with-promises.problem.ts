export {};

interface User6 {
  id: string;
  firstName: string;
  lastName: string;
}

const createThenGetUser = async (
  createUser: () => Promise<string>,
  getUser: (id: string) => Promise<User6>
): Promise<User6> => {
  const userId: string = await createUser();

  const user = await getUser(userId);

  return user;
};

const user6 = await createThenGetUser(
  async () => "123",
  async (id) => ({
    id,
    firstName: "Asaad",
    lastName: "Saad",
  }) //
);
