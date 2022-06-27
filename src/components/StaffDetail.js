import React, { Component } from "react";
import {
  CardTitle,
  CardBody,
  CardImg,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import {Link} from 'react-router-dom'
import dateFormat from "dateformat";

function StaffDetail(props){
return (
  <>
    <div>
    <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/">Nhân viên</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{props.staff.name}</BreadcrumbItem>
          </Breadcrumb>
    </div>
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
  </>
)
}
export default StaffDetail;
