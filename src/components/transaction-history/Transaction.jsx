import PropTypes from "prop-types";
import styles from "components/transaction-history/transaction.css"

const TransactionHistory = ({ items }) => {
  return (
    <table className={styles['transaction-history']}>
    <thead className={styles['transaction-head']}>
      <tr>
        <th className={styles['transaction-title']}>Type</th>
        <th className={styles['transaction-title']}>Amount</th>
        <th className={styles['transaction-title']}>Currency</th>
      </tr>
    </thead>

    <tbody>
      {items.map(item => (
        <tr className={styles['transaction-row']} key={item.id}>
          <td className={styles['transaction-cell']}>{item.type}</td>
          <td className={styles['transaction-cell']}>{item.amount}</td>
          <td className={styles['transaction-cell']}>{item.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.exact({
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
export default TransactionHistory;