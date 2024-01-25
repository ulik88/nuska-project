import { ListItem } from "react-native-elements/dist/list/ListItem";

type RootStackParamList = {
  BottomTabNav: { id: number };
  HomeScreen: { id: number };
  Auth: undefined;
  Account: undefined;
  CurrentDetail: { id: number; title: string; description: string; imageSource: string; created_at: string; content: string };

  CheckListScreen: { id: number, title: string; contentItems: ListItem; content: string };
};
//const { title, contentItems, content } = route.params;
/* To solve the problem, I would update the type definition of the params 
object in the RootStackParamList type to include the contentItems property.
 */

/* interface CategoryItemProps {
  category: {
    name: string;
    subItems: {
      name: string;
      description: string;
    }[];
  };
}

interface CategoryItemSubProps {
  subItem: {
    name: string;
    description: string;
  };
} */

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
export type { User, Post, /* CategoryItemProps, CategoryItemSubProps, */ RootStackParamList };



