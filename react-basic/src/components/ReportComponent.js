import DataContext from "../data/DataContext";
import { useContext } from "react";
const ReportComponent=()=>{
    const name = useContext(DataContext)
    return(
        
        <div>
           สวัสดี : {name}
        </div>
    ); 
}

export default ReportComponent