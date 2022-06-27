import React, { Component } from "react";
import { Routes,Route,Navigate,useParams } from "react-router-dom"




import { STAFFS } from "../data/staffs";
import Header from "./Header";
import StaffList from "./StaffList";
import StaffDetail from "./StaffDetail";
import Footer from "./Footer";


class Main extends Component {
  constructor() {
    super();
    this.state = { staffs: STAFFS, detail: null, columns: "col-sm-4" };
  }

 
    
  
 

  render() {
    
    // function StaffWithId() {
    //   const Id= useParams().id;
     
    //   return (
    //     <StaffDetail staff={this.state.staffs.filter(staff => staff.id === parseInt(Id))[0]} />
    //   ) ;
    // }
    const StaffWithId=()=> {
      const Id= useParams().id;
      console.log(Id);
      console.log(STAFFS);
      return (
        <StaffDetail staff={this.state.staffs.filter(staff => staff.id === parseInt(Id))[0]} />
      ) ;
    }

    return (
      <>
        <div className="container">
          <Header/>
          <Routes>
            <Route path='*' element={<Navigate to='/StaffList'/>}/>
            <Route path='StaffList/:id' element={<StaffWithId />}/>
            <Route exact path='StaffList' element={<StaffList staffs={this.state.staffs} />}/>
          </Routes>
          <Footer/>
        </div>
      </>
    );
  }
}

export default Main;
