import './statistics.css';
import PropTypes from "prop-types";

const Statistics = ({ title, stats }) => (
    <section class="statistics">
        {title && <h2 class="title">{title}</h2>}

        <ul class="stat-list">
            {stats.map(stat => {
                const colorRand = getRandomHexColor();

                return <li key={stat.id} style={{backgroundColor: colorRand}} class="item">
                    <span class="label">{stat.label}</span>
                    <span class="percentage" >{stat.percentage}%</span>
                </li>

            })}
        </ul>
    </section>
);

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array,
}

export default Statistics;