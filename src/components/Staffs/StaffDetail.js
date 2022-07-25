import React, { Component, useState } from "react";
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
  const  [LocalStaff,setLocalStaff] = useState(props.staff[0])
  console.log(LocalStaff)
return (
  <>
    <div>
    <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/">Nhân viên</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{LocalStaff.name}</BreadcrumbItem>
          </Breadcrumb>
    </div>
    <div className="row">
    <div className='col-4'>
  <CardImg src={LocalStaff.image} width="200px" height="300px"/>
  </div>
  <div className="col-8">
  <CardBody>
    <CardTitle>
      Họ và tên: <h3>{LocalStaff.name}</h3>
    </CardTitle>
    <CardTitle>
      Ngày sinh: {dateFormat(LocalStaff.doB, "dd,mm,yyyy")}
    </CardTitle>
    <CardTitle>
      Ngày vào công ty: {dateFormat(LocalStaff.startDate, "dd,mm,yyyy")}
    </CardTitle>
    <CardTitle>Phòng ban: {LocalStaff.departmentId}</CardTitle>
    <CardTitle>Hệ số lương: {LocalStaff.salaryScale}</CardTitle>
    <CardTitle>Số ngày nghĩ còn lại: {LocalStaff.annualLeave}</CardTitle>
    <CardTitle>Số ngày đã làm thêm: {LocalStaff.overTime}</CardTitle>
  </CardBody>
  </div>
</div>
  </>
)
}
export default StaffDetail;
