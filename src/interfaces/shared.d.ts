declare module "react-masonry-infinite" {

  interface MasonryPropTypes {
    pack?: boolean;
    style?: Object;
    sizes?:Object;
    options?: any;
    MasonryOptions?: any;
    className?: string;
    packed?: string;
  }

  export default class MasonryInfiniteScroller extends  React.Component<any, any> { }
}

interface AppProps {
    listItems: {years:string,description:string,picture:string}[]
    menuItems: MenuItemProps[];
}

interface MenuItemProps {
    id: string;
    href: string;
    text: string;
}
