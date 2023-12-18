export type RootStackParamList = {
  HomePage: undefined;
  Auth: undefined;
  Account: undefined;
  CurrentDetail: { id: string }
};
// Define custom types and interfaces here

interface User {
  id: number;
  name: string;
  email: string;
}

interface Post {
  id: number;
  title: string;
  content: string;
  author: User;
}

// Export the types and interfaces for use in other files
export type { User, Post };
