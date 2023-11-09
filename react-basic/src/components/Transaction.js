import Item from "./Item";
import './Transaction.css';
import { v4 as uuidv4 } from 'uuid';

const Transaction = () => {
<<<<<<< Updated upstream
    const data = [{ id: 1, title: 2000 , amount: "ทดสอบ" },
    { id: 2 ,title: "ค่าน้ำมัน", amount: 5000 },
    { id: 3 ,title: "ค่าเช่าบ้าน", amount: 80000 },
    { id: 4 , title: "ค่าจิปาถะ", amount: 60000 },
    { id: 5, title: "ค่าเช่ารถ", amount: 50000 }
=======
    const data = [{ title: "ค่ารักษาพยาบาล", amount: 2000 },
    { title: "ค่าน้ำมัน"},
    { title: "ค่าเช่าบ้าน", amount: 80000 },
    { title: "ค่าจิปาถะ", amount: 60000 },
    { title: "ค่าเช่ารถ", amount: 50000 }
>>>>>>> Stashed changes
    ]

    return (
        // <ul className="item-list">
        //     <Item title={data[0].title} amount = {data[0].amount} />
        //     <Item title={data[1].title} amount = {data[1].amount} />
        //     <Item title={data[2].title} amount = {data[2].amount} />
        //     <Item title="เงินเดือน" amount = "50000" />
        //     <Item title="ค่าเดินทาง" amount = "5000" />
        // </ul>
        // การ Map data
        <ul className="item-list">
            {data.map((element) => {
                // return  <Item title={element.title} amount = {element.amount} />
                // return <Item {...element} key={element.id} />
                // return <Item {...element} key={uuidv4()} />
                return <Item title={element.title} amount={element.amount}  key={uuidv4()} />
            })}
        </ul>
    );

}

export default Transaction