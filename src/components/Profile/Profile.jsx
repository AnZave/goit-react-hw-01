import styles from "./Profile.module.css";

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={styles.container}>
      <div>
        <img className={styles.avatar} src={avatar} alt="User avatar" />
        <p className={styles.userName}>{username}</p>
        <p className={styles.userTag}>@{tag}</p>
        <p className={styles.userLocation}>{location}</p>
      </div>

      <ul className={styles.statsList}>
        <li className={styles.statsItem}>
          <span className={styles.label}>Followers</span>
          <span className={styles.stats}>{stats.followers}</span>
        </li>
        <li className={styles.statsItem}>
          <span className={styles.label}>Views</span>
          <span className={styles.stats}>{stats.views}</span>
        </li>
        <li className={styles.statsItem}>
          <span className={styles.label}>Likes</span>
          <span className={styles.stats}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
export default Profile;
