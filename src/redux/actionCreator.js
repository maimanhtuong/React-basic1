import { addStaffs, addDepartments, addSalary, addStaffsDe } from "./actions"

export const fetchStaffs = () => (dispatch) => {
   return fetch('https://rjs101xbackend.herokuapp.com/')
        .then(res => res.json())
        .then(res => dispatch(addStaffs(res)))
}
export const fetchStaffsDe = (idDe) => (dispatch) => {
        console.log(idDe)
   return fetch(`https://rjs101xbackend.herokuapp.com/departments/${idDe}`)
        .then(res => res.json())
        .then(res => dispatch(addStaffsDe(res)))
}
export const fetchDepartments = () => (dispatch) => {
   return fetch('https://rjs101xbackend.herokuapp.com/departments')
        .then(res => res.json())
        .then(res => dispatch(addDepartments(res)))
}
export const fetchSalary = () => (dispatch) => {
   return fetch('https://rjs101xbackend.herokuapp.com/staffsSalary')
        .then(res => res.json())
        .then(res => dispatch(addSalary(res)))
}