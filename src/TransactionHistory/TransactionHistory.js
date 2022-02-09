import './transactionHistory.css';
import PropTypes from "prop-types";
import TransactionHistoryItem from './TransactionHistoryItem';

const TransactionHistory = ({items}) => (
    <table class="transaction-history">
        <thead class="table-head">
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>

        <tbody>
            {items.map(item => {
                return <TransactionHistoryItem
                    id={item.id}
                    type={item.type}
                    amount={item.amount}
                    currency={item.currency}
                />
            })}
        </tbody>
    </table>
);

TransactionHistory.propTypes = {
    items: PropTypes.array,
}

export default TransactionHistory;

