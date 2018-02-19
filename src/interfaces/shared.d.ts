interface timelineItem {
  name: string,
  years: string,
  description: string,
  picture: string,
  title: string,
  link: string
}
interface AppProps {
    listItems:timelineItem[]
}
interface timelineCardProps {
    listItem:timelineItem,
    cardIndex:number,
}
