import css from './StatisticsElement.module.css';

export default function StatisticsElement({ label, percentage }) {
    return (
    <li  className={css.item} style={{backgroundColor : getRandomHexColor()}}>
        <span className={css.label}>{label}</span>
        <span className={css.percentage}>{percentage}%</span>
    </li>
    );
};


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
