import './App.css';
import React from "react";
import Transaction from './components/Transaction';
import FromComponent from './components/FormComponent';

// const Title = () => <h1>โปรแกรมบัญชีรายรับ - รายจ่าย</h1>
// const Description = () => <p>บันทึกข้อมูลบัญชีในแต่ละวัน</p>


// const Item = () => <li>เงินเดือน <span> +10,000</span></li>

// const Transaction = () => {
//   return (
//     // <ul>
//     //   <li>ค่าเดินทาง <span>-200</span></li>
//     //   <li>เงินเดือน<span>+20,000</span></li>
//     //   <li>เงินอาหาร<span>-500</span></li>`1
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
  const design = {color:'red' , textAlign:'center' , fontSize:'1.5rem'}
  return (
    <div className='container'>
       <h1 style={design}>โปรแกรมบัญชีรายรับ - รายจ่าย</h1>
       <FromComponent/>
      <Transaction />
    </div>
  );
}

export default App;
