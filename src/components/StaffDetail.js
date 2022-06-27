import React, { Component } from "react";
import {
  Card,
  CardTitle,
  CardBody,
  CardImg,
  Navbar,
  NavbarBrand,
  Collapse,
  Nav,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from "reactstrap";
import dateFormat from "dateformat";

function StaffDetail(props){
return (
    <div className="row">
    <div className='col-4'>
  <CardImg src={props.staff.image} width="200px" height="300px"/>
  </div>
  <div className="col-8">
  <CardBody>
    <CardTitle>
      Họ và tên: <h3>{props.staff.name}</h3>
    </CardTitle>
    <CardTitle>
      Ngày sinh: {dateFormat(props.staff.doB, "dd,mm,yyyy")}
    </CardTitle>
    <CardTitle>
      Ngày vào công ty: {dateFormat(props.staff.startDate, "dd,mm,yyyy")}
    </CardTitle>
    <CardTitle>Phòng ban: {props.staff.department.name}</CardTitle>
    <CardTitle>Số ngày nghĩ còn lại: {props.staff.annualLeave}</CardTitle>
    <CardTitle>Số ngày đã làm thêm: {props.staff.overTime}</CardTitle>
  </CardBody>
  </div>
</div>
)
}
export default StaffDetail;
