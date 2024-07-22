import FriendListItem from "../FriendListItem/FriendListItem";
import styles from "./FriendList.module.css";
const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendsList}>
      {friends.map((friend) => (
        <li key={friend.id} className={styles.friendsItem}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            status={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
};
export default FriendList;
