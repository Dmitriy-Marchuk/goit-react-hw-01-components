import css from './TransactionsTable.module.css';

export default function Transaction({ type, amount, currency }) {
    return (
        <>  
            <td className={css.element}>{type}</td>
            <td className={css.element}>{amount}</td>
            <td className={css.element}>{currency}</td>
        </>
    )
}