import styles from './FeedItem.module.scss'
import { format } from 'date-fns'

export interface IFeedItem {
  message?: string
  name?: string
  createdAt?: Date
}

const FeedItem = ({ message, name, createdAt }: IFeedItem) => {
  return (
    <li>
      <p>{message}</p>
      <span>{name}</span>
      {createdAt && (
        // Date does not accept undefined values, hence the need to wrap in a conditional
        <span>{format(new Date(createdAt), "d MMM yyyy 'at' h:mm bb")}</span>
      )}
    </li>
  )
}

export default FeedItem
