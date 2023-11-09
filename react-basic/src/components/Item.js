import './Item.css'
import PropTypes from 'prop-types'

const Item = (props) =>{
    const {title ,amount} = props
    return(
        // <li>{props.title}< span>{props.amount}</span></li>
        <li>{title}< span>{amount}</span></li>
    );
}

// prop-types
Item.propTypes = {
    title: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired
};
export default Item;