import { STAFFS } from "../../data/staffs";

const StaffsReducer = (state = [], action) =>{
    switch(action.type){
        case 'staffs/addStaffs':
            console.log(action.payload)
            return action.payload
        default: return state
    }
}
export default  StaffsReducer