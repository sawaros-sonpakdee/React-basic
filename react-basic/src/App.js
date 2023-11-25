import './App.css';
import { useEffect, useState } from "react";
import Transaction from './components/Transaction';
import FromComponent from './components/FormComponent';
import DataContext from './data/DataContext';
import ReportComponent from './components/ReportComponent';


// import { v4 as uuidv4 } from 'uuid';

// const Title = () => <h1>โปรแกรมบัญชีรายรับ - รายจ่าย</h1>
// const Description = () => <p>บันทึกข้อมูลบัญชีในแต่ละวัน</p>


// const Item = () => <li>เงินเดือน <span> +10,000</span></li>

// const Transaction = () => {
//   return (
//     // <ul>
//     //   <li>ค่าเดินทาง <span>-200</span></li>
//     //   <li>เงินเดือน<span>+20,000</span></li>
//     //   <li>เงินอาหาร<span>-500</span></li>
//     // </ul>
//     <ul>
//     <Item/>
//     <Item/>
//     <Item/>
//     <Item/>
//     <Item/>
//     <Item/>
//     </ul>
//   );

// }

//การเรียกใช้ component
//App = root components (mother)
//title = child component 
//description = child component 
//transaction = child component 
function App() {
  const design = { color: 'red', textAlign: 'center', fontSize: '1.5rem' }

  //stateเริ่มต้นที่เก็บข้อมูล
  // const initState =[
  //   {id:1,title:"ค่ารักษาพยาบาล" ,amount:-2000},
  //   {id:2,title:"จ่ายค่าประกัน",amount:-300},
  //   {id:3,title:"ค่าเดินทาง",amount:-800},
  //   {id:4,title:"ค่าบ้าน",amount:-3000},
  //   {id:5,title:"ค่างานพิเศษ",amount:4000}
  // ]

  const [items, setItems] = useState([])

  const [reportIncome,setReportIncome] = useState(0)
  const [reportExpense,setReportExpense] = useState(0)

  const onAddNewItem = (newItem) => {
    setItems((prevItem) => {
      return [newItem, ...prevItem]
    })
  }
  //คำนวณ
  useEffect(()=>{
      const amounts = items.map(items=>items.amount)
      // console.log(amounts)
      const income = amounts.filter(element=>element>0).reduce((total,element)=>total+=element,0)
      const expense = (amounts.filter(element=>element<0).reduce((total,element)=>total+=element,0))*-1
      console.log("รายได้ = ", income)
      console.log("รายจ่าย = ", expense)
      // const summary = income-expense
      // console.log("ยอดคงเหลืือ   =",summary)
      setReportIncome(income)
      setReportExpense(expense)
      
  },[items,reportIncome,reportExpense])
  return (
    <DataContext.Provider value={
      {income: reportIncome,
      expense:-reportExpense
      }
    }>
      <div className='container'>
        <h1 style={design}>โปรแกรมบัญชีรายรับ - รายจ่าย</h1>
        <ReportComponent/>
        <FromComponent onAddItem={onAddNewItem} />
        <Transaction items={items} />
      </div>
    </DataContext.Provider>
  );
}

export default App;
