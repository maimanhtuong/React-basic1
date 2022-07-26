import { addStaffs, addDepartments, addSalary, addStaffsDe } from "./actions";

export const fetchStaffs = () => (dispatch) => {
  return fetch("https://rjs101xbackend.herokuapp.com/")
    .then((res) => res.json())
    .then((res) => dispatch(addStaffs(res)));
};

export const fetchStaffsDe = (idDe) => (dispatch) => {
  console.log(idDe);
  return fetch(`https://rjs101xbackend.herokuapp.com/departments/${idDe}`)
    .then((res) => res.json())
    .then((res) => dispatch(addStaffsDe(res)));
};

export const fetchDepartments = () => (dispatch) => {
  return fetch("https://rjs101xbackend.herokuapp.com/departments")
    .then((res) => res.json())
    .then((res) => dispatch(addDepartments(res)));
};

export const fetchSalary = () => (dispatch) => {
  return fetch("https://rjs101xbackend.herokuapp.com/staffsSalary")
    .then((res) => res.json())
    .then((res) => dispatch(addSalary(res)));
};

export const addNewStaff = (newStaff) => (dispatch) => {
  console.log(newStaff);
  const staff = {
    id: newStaff.id,
    name: newStaff.name,
    doB: newStaff.doB,
    salaryScale: newStaff.salaryScale,
    startDate: newStaff.startDate,
    departmentId: newStaff.department.id,
    annualLeave: newStaff.annualLeave,
    overTime: newStaff.overTime,
    image: newStaff.image,
  };
  return fetch("https://rjs101xbackend.herokuapp.com/staffs", {
    method: "POST",
    body: JSON.stringify(staff),
    headers: { "Content-Type": "application/json" },
    credentials: "same-origin",
  })
    .then((res) => res.json())
    .then((res) => dispatch(addStaffs(res)));
};

export const deleteStaff = (idStaff) => (dispatch) => {

        return fetch(`https://rjs101xbackend.herokuapp.com/staffs/${idStaff}`,{
                method:'DELETE',
                headers: {'Content-Type':'application/json'},
                credentials: "same-origin",

                })
                .then(res => res.json())
                .then(res => dispatch(addStaffs(res)))

}

export const editStaff = (staff) => (dispatch) => {
        console.log(staff)
        return fetch('https://rjs101xbackend.herokuapp.com/staffs/',{
                method:'PATCH',
                body: JSON.stringify(staff),
                headers:{'Content-Type':'application/json'},
                credentials: 'same-origin', 

                })
                .then(res => res.json())
                .then(res => dispatch(addStaffs(res)))
}
