import { STAFFS } from "../../data/staffs";

const SalaryReducer = (state = [], action) =>{
    switch(action.type){
        case 'salary/addSalary':
            return action.payload
        default: return state
    }
}
export default  SalaryReducer