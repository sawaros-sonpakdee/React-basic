import './Item.css'
const Item = () =>{
    const name = "พักโรงเเรมญี่ปุ่น"
    const amount = 5000
    return(
        <li className='item'>{name} <span> -{amount}</span></li>
    );
}
export default Item;