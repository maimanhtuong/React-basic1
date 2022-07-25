import SalaryReducer from "../components/Salary/SalarySlice";
import DepartmentReducer from "../components/Department/DepartmentsSlice";
import StaffsReducer from "../components/Staffs/StaffsSlice";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
   staffs: StaffsReducer,
   departments: DepartmentReducer,
   salary: SalaryReducer
})

export default rootReducer
// export default createSlice({
//     name: 'data',
//     initialState: {
//         staffs: STAFFS,
//         departments: DEPARTMENTS,
//         search:'',

//     },
//     reducers: {
//         addStaff: (state, action) => {
//             state.staffs.push(action.payload);
//         },//action creator
//         search: (state, action) => {
//             state.search =action.payload
//         }
        
//     }
// })