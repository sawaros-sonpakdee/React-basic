import './Item.css'
import PropTypes from 'prop-types'
import DataContext from '../data/DataContext'
import { useContext } from 'react'


const Item = (props) => {
    const { title, amount } = props
    const status = amount < 0 ? "expense" : "income"
    const symbol = amount < 0 ? "-" : "+"
    const name = useContext(DataContext)
    return (
        // <li>{props.title}< span>{props.amount}</span></li>
        <li className={status}>{title} {status}< span>{symbol}{Math.abs(amount)}</span>
            {/* <DataContext.Consumer>
            {value=><span>{value}</span>}
            </DataContext.Consumer> */}
            {name}
        </li>
    );
}

// prop-types
Item.propTypes = {
    title: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired
};
export default Item;