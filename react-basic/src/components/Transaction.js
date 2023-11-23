import Item from "./Item";
import './Transaction.css';
import DataContext from "../data/DataContext";

// import { v4 as uuidv4 } from 'uuid';

const Transaction = (props) => {
    // const data = [{ title: "ค่าเทอมลูก", amount: 15000 },
    // { title: "ค่าน้ำมัน", amount: 5000 },
    // { title: "ค่าเช่าบ้าน", amount: 80000 },
    // { title: "ค่าจิปาถะ", amount: 60000 },
    // { title: "ค่าเช่ารถ", amount: 50000 }
    // ]
    const {items} = props

    return (
        // <ul className="item-list">
        //     <Item title={data[0].title} amount = {data[0].amount} />
        //     <Item title={data[1].title} amount = {data[1].amount} />
        //     <Item title={data[2].title} amount = {data[2].amount} />
        //     <Item title="เงินเดือน" amount = "50000" />
        //     <Item title="ค่าเดินทาง" amount = "5000" />
        // </ul>
        // การ Map data
        <div>
        <ul className="item-list">
            {items.map((element) => {
                // return  <Item title={element.title} amount = {element.amount} />
                // return <Item {...element} key={element.id} />
                return <Item {...element} key={element.id} />
                // return <Item title={element.title} amount={element.amount}  key={uuidv4()} />
            })}
        </ul>
        <DataContext.Consumer>
            {value=><p>{value}</p>}
        </DataContext.Consumer>
        </div>
    );

}

export default Transaction