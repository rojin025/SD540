interface User4 {
  id: number;
  firstName: string;
  lastName: string;
  role: "admin" | "user" | "super-admin";
  posts: Array<Post>;
}

interface Post {
  id: number;
  title: string;
}

// How do we ensure that makeUser ALWAYS returns a user?
const makeUser = () => {
  return {
    id: 0,
    firstName: "Default First Name",
    lastName: "Default Last Name",
    role: "user",
    posts: [
      {
        id: 0,
        title: "Default Title",
      },
    ],
  };
};

const user4 = makeUser();

console.log(user4.id);
console.log(user4.firstName);
console.log(user4.lastName);
console.log(user4.role);

console.log(user4.posts[0].id);
console.log(user4.posts[0].title);
