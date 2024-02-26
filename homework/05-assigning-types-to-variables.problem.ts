interface User1 {
  id: number;
  firstName: string;
  lastName: string;
  isAdmin: boolean;
}

const defaultUser: User1 = {
  id: 0,
  firstName: "Default FirstName",
  lastName: "Default LastName",
  isAdmin: false,
};

const getUserId = (user: User1): number => {
  return user.id;
};

getUserId(defaultUser);
