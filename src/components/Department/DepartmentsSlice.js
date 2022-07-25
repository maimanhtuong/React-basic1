
const DepartmentReducer = (state = {
    departments:[],
    staffsDe:[]
} ,action)=>{
    switch(action.type){
        case 'departments/addDepartments':
            return {...state,departments : action.payload}
        case 'departments/addStaffsDe':
            return {...state,staffsDe:action.payload}
        default: return state;
    }
}
export default DepartmentReducer