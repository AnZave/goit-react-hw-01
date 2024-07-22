import styles from "./TransactionHistory.module.css";
const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.table}>
      <thead className={styles.title}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      {items.map((item) => (
        <tbody key={item.id}>
          <tr className={styles.item}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};

export default TransactionHistory;
