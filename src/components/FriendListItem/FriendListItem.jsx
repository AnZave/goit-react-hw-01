import styles from "./FriendListItem.module.css";
const FriendListItem = ({ avatar, name, status }) => {
  return (
    <div className={styles.friendItem}>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p className={status ? styles.online : styles.offline}>
        {status ? "🔛" : "📴"}
      </p>
    </div>
  );
};
export default FriendListItem;
