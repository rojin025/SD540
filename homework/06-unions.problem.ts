interface User3 {
  id: number;
  firstName: string;
  lastName: string;
  // How do we ensure that role is only one of: 'admin' or 'user' or 'super-admin'
  role: "admin" | "user" | "super-admin";
}

const myDefaultUser: User3 = {
  id: 1,
  firstName: "Asaad",
  lastName: "Saad",
  role: "super-admin",
};
