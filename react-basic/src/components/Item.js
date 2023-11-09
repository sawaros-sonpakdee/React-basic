import './Item.css'
import PropTypes from 'prop-types';

const Item = (props) =>{
    const {title,amount} = props
    return(
        // <li>{props.title}< span>{props.amount}</span></li>
        <li>{title}< span>{amount}</span></li>
    );
}

// prop-types
Item.propsTypes = {
    title:PropTypes.string,
    amount:PropTypes.number
}
export default Item;