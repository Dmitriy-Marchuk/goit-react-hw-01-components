import css from './Statistics.module.css';
import StatisticsElement from './StatisticsElement';


export default function Statistics({data, title}) {
    return (
        <section className={css.statistics}>
            {title ? <h2 className={css.title}>{title}</h2> : "" }
            <ul className={css.statList}>
              {data.map(data => (
                    <StatisticsElement
                    key={data.id}
                    label={data.label}
                    percentage={data.percentage}
                  />
              ))}
            </ul>
        </section>
    );
};
