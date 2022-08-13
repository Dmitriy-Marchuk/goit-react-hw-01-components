import css from './TransactionsTable.module.css';
import Transaction from './Transaction';

export default function TransactionsTable({ transactions }) {
    return (
        <table className={css.table}>
            <thead className={css.head}>
                <tr>
                    <th className={css.element}>Type</th>
                    <th className={css.element}>Amount</th>
                    <th className={css.element}>Currency</th>
                </tr>
            </thead>
            <tbody>
                {transactions.map(transaction => (
                    <tr className={css.row} key={transaction.id}>
                        <Transaction
                            type={transaction.type}
                            amount={transaction.amount}
                            currency={transaction.currency}
                        />
                    </tr>
                ))}
            </tbody>
        </table>
    )
}