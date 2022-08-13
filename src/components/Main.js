import { Routes, Route, Navigate, useParams, useNavigate, useLocation } from "react-router-dom";
import React, { Component,useEffect, useState } from "react";
import { connect,useDispatch } from "react-redux";

import Header from "./layout/Header";
import StaffList from "./Staffs/StaffList";
import StaffDetail from "./Staffs/StaffDetail"
import StaffOfDepartment from "./Department/StaffOfDepartment"
import DepartmentList from "./Department/DepartmentList";
import SalaryList from "./Salary/SalaryList";
import Footer from "./layout/Footer";
import { fetchStaffs,fetchDepartments,fetchSalary,fetchStaffsDe } from '../redux/actionCreator'
import { TransitionGroup, CSSTransition } from 'react-transition-group';




function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation()
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{  navigate, params, location }} />;
  }

  return ComponentWithRouterProp;
}

//selector from state redux store
const mapStateToProps = (state) => {
  return {
    staffs: state.staffs,
    departments: state.departments.departments,
    salary: state.salary,
    staffsDe: state.departments.staffsDe
  };
};

const mapDispatchToProps = (dispatch) => ({
 
  fetchStaffs: () => {
    dispatch(fetchStaffs());
  },
  fetchDepartments: () => {
    dispatch(fetchDepartments());
  },
  fetchSalary: () => {
    dispatch(fetchSalary());
  },
  // fetchStaffsDe: (idDe) => {
  //   console.log(idDe)
  //   dispatch(fetchStaffsDe(idDe))
  // }
  
  
});

const StaffWithDepartmentId = (props) => {
  const [flag,setFlag]=useState(props.flag) 
  const dispatch = useDispatch()
  const idDe = (useParams().idDe);
  // dispatch(fetchStaffsDe(idDe))
    // console.log('useEffect')
    if(flag){
    dispatch(fetchStaffsDe(idDe))
    setFlag(false)
    }
  return (
    <StaffOfDepartment
      staffsDe={
        props.staffsDe
      }
    />
  );
};

class Main extends Component {
  
  // const STORE = useSelector((state) => state.store);
  // const [staffs,setStaff] = useState(STORE.staffs);
  
  // const [departments,setDepartment] = useState(STORE.departments);

  componentDidMount() {
    this.props.fetchStaffs();
    this.props.fetchDepartments();
    this.props.fetchSalary();

  }
  
 
  render(){
    const StaffWithId = () => {
      const Id = useParams().id;
      return (
        <StaffDetail
          staff={
            this.props.staffs.filter((staff) => staff.id === parseInt(Id))
          }
        />
      );
    };
    

//RETURN
    return (
      <>
        <div className="container">
          <Header />
          <TransitionGroup>
          <CSSTransition
           in={true} timeout={500} classNames="my-node"
          >
          <Routes location={this.props.location}>
            <Route
              exact
              path="StaffList"
              element={<StaffList staffs={this.props.staffs} departments={this.props.departments}  />}
            />
            <Route path="StaffList/:id" 
            element={<StaffWithId/>}
             />
            <Route
              path="DepartmentList"
              element={<DepartmentList departments={this.props.departments} />}
            />
             <Route path="DepartmentList/:idDe" 
            element={<StaffWithDepartmentId staffsDe={this.props.staffsDe} flag={true}/>}
             />
            <Route
              path="SalaryList"
              element={<SalaryList salary={this.props.salary} />}
            />
            <Route path="*" element={<Navigate to="/StaffList" />} />
          </Routes>
          </CSSTransition>
          </TransitionGroup>
          <Footer />
        </div>
      </>
    );
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
