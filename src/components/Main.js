import { Routes, Route, Navigate, useParams } from "react-router-dom";
import React, { useState } from "react";

import Header from "./layout/Header";
import StaffList from "./Staffs/StaffList";
import StaffDetail from "./Staffs/StaffDetail"
import DepartmentList from "./Department/DepartmentList";
import SalaryList from "./Salary/SalaryList";
import Footer from "./layout/Footer";

import { useSelector} from "react-redux";
import { staffsSelector,departmentSelector, searchSelector, staffsRemainingSelector} from '../redux/selector'


function Main() {
  
  // const STORE = useSelector((state) => state.store);
  // const [staffs,setStaff] = useState(STORE.staffs);
  
  // const [departments,setDepartment] = useState(STORE.departments);

  const STAFFS = useSelector(staffsRemainingSelector);
  const DEPARTMENTS = useSelector(departmentSelector);

 
  
    const StaffWithId = () => {
      const Id = useParams().id;
      return (
        <StaffDetail
          staff={
            STAFFS.filter((staff) => staff.id == parseInt(Id))[0]
          }
        />
      );
    };

    return (
      <>
        <div className="container">
          <Header />
          <Routes>
            <Route
              exact
              path="StaffList"
              element={<StaffList staffs={STAFFS} departments={DEPARTMENTS} />}
            />
            <Route path="StaffList/:id" element={<StaffWithId />} />
            <Route
              path="DepartmentList"
              element={<DepartmentList staffs={DEPARTMENTS} />}
            />
            <Route
              path="SalaryList"
              element={<SalaryList staffs={STAFFS} />}
            />
            <Route path="*" element={<Navigate to="/StaffList" />} />
          </Routes>
          <Footer />
        </div>
      </>
    );
  }


export default Main;
