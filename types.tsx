// interface RootStackParamList {

type RootStackParamList = {
  BottomTabNav: { id: number };
  HomeScreen: { id: number };
  Auth: undefined;
  Account: undefined;
  Categories: undefined;

  CurrentDetail: {
    id: number | string;
    title: string;
    description: string;
    imageSource: string;
    created_at: string;
    content: string;
  };

  CheckList: {
    id: number | string;
    sub_title: string;
    description: string;
    content_title: string;
    contentItems: IContent[];
  };
};

// interface ICurrentData 

interface ICurrentData {
  id: number;
  title: string;
  description: string;
  imageSource: string;
  content: string;
  created_at: string;
}

// interface ICategoryData 
interface ICategoryData {
  id: number;
  title: string;
  subItems: ISubItem[];
}

interface ISubItem {
  id: number;
  sub_title: string;
  content: IContent[];
}

interface IContent {
  id: number | string;
  description?: string;
  content_title?: string;
  requirements?: IRequirements[];

}

interface IRequirements {
  id: number;
  requirement: string;
}

// Export the types and interfaces for use in other files
export type { ICurrentData, ICategoryData, RootStackParamList, ISubItem, IContent, IRequirements };



