import './Item.css'
const Item = (props) =>{
    const {title,amount} = props
    return(
        // <li>{props.title}< span>{props.amount}</span></li>
        <li>{title}< span>{amount}</span></li>
    );
}
export default Item;