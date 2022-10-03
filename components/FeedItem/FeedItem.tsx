import styles from './FeedItem.module.scss'

export interface IFeedItem {
  message?: string
  name?: string
}

const FeedItem = ({ message, name }: IFeedItem) => {
  return (
    <li>
      <p>{message}</p>
      <span>{name}</span>
    </li>
  )
}

export default FeedItem
