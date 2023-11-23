import { useContext } from "react";
import DataContext from "../data/DataContext";

const ReportComponent=()=>{
    const {income,expense}  =  useContext(DataContext)
    return(
        <div>
            {/* <DataContext.Consumer>
                {context=> }
            </DataContext.Consumer> */}
            <p>รายรับ: {income} </p>
            <p>รายจ่าย:{expense}</p>
        </div>
    ); 
}

export default ReportComponent