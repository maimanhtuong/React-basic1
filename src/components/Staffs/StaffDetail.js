import React, { Component, useState } from "react";
import {
  Card,
  CardTitle,
  CardBody,
  CardImg,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import {Link} from 'react-router-dom'
import dateFormat from "dateformat";
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

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
    <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}> 
  <CardImg src={LocalStaff.image} width="200px" height="300px"/>
  </FadeTransform>
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
