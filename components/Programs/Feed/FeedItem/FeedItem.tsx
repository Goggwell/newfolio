import styles from './FeedItem.module.scss'
import { format } from 'date-fns'

export interface IFeedItem {
  message?: string
  name?: string
  createdAt?: Date
}

const FeedItem = ({ message, name, createdAt }: IFeedItem) => {
  return (
    <li className={styles.feedItem}>
      <p className={styles.feedItem__message}>{message}</p>
      <span className={styles.feedItem__name}>
        {name}{' '}
        {createdAt && (
          // Date does not accept undefined values, hence the need to wrap in a conditional
          <span className={styles.feedItem__time}>
            | {format(new Date(createdAt), "d MMM yyyy 'at' h:mm bb")}
          </span>
        )}
      </span>
    </li>
  )
}

export default FeedItem
