import './transactionHistory.css';
import PropTypes from "prop-types";

const TransactionHistoryItem = ({id, type, amount, currency}) => (
    <tr key={id}>
        <td class="type">{type}</td>
        <td class="amount">{amount}</td>
        <td class="currency">{currency}</td>
    </tr>
);

TransactionHistoryItem.propTypes = {
    id: PropTypes.string,
    type: PropTypes.string,
    amount: PropTypes.number,
    currency: PropTypes.string,
}

export default TransactionHistoryItem;