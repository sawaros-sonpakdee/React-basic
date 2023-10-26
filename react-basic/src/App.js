import logo from './logo.svg';
import './App.css';
import React from "react";

const Title = () => <h1>โปรแกรมบัญชีรายรับ - รายจ่าย</h1>
const Description = () => <p>บันทึกข้อมูลบัญชีในแต่ละวัน</p>


const Item = () => <li>เงินเดือน <span> +10,000</span></li>

const Transaction = () => {
  return (
    // <ul>
    //   <li>ค่าเดินทาง <span>-200</span></li>
    //   <li>เงินเดือน<span>+20,000</span></li>
    //   <li>เงินอาหาร<span>-500</span></li>
    // </ul>
    <ul>
    <Item/>
    </ul>
  );

}
function App() {
  return (
    <div>
      <Title />
      <Description />
      <Transaction />
    </div>
  );
}

export default App;
