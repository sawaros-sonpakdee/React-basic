import './Item.css'
import PropTypes from 'prop-types'


const Item = (props) => {
    const { title, amount } = props
    const status = amount < 0 ? "expense" : "income"
    const symbol = amount < 0 ? "-" : "+"

    const formatNumber =(num)=>{
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,'$1,')
    }

    return (
        // <li>{props.title}< span>{props.amount}</span></li>
        <li className={status}>{title} {status}< span>{symbol}{formatNumber(Math.abs(amount))}</span>
            {/* <DataContext.Consumer>
            {value=><span>{value}</span>}
            </DataContext.Consumer> */}
  
        </li>
    );
}

// prop-types
Item.propTypes = {
    title: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired
};
export default Item;