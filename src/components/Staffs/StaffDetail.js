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
  const a=[props.staff[0].name,props.staff[0].image,props.staff[0].doB,props.staff[0].startDate,props.staff[0].department.name,
  props.staff[0].annualLeave,props.staff[0].overTime,props.staff[0].salaryScale
];
  console.log(a);
return (
  <>
    <div>
    <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/">Nhân viên</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{a[0]}</BreadcrumbItem>
          </Breadcrumb>
    </div>
    <div className="row">
    <div className='col-4'>
  <CardImg src={a[1]} width="200px" height="300px"/>
  </div>
  <div className="col-8">
  <CardBody>
    <CardTitle>
      Họ và tên: <h3>{a[0]}</h3>
    </CardTitle>
    <CardTitle>
      Ngày sinh: {dateFormat(a[2], "dd,mm,yyyy")}
    </CardTitle>
    <CardTitle>
      Ngày vào công ty: {dateFormat(a[3], "dd,mm,yyyy")}
    </CardTitle>
    <CardTitle>Phòng ban: {a[4]}</CardTitle>
    <CardTitle>Hệ số lương: {a[7]}</CardTitle>
    <CardTitle>Số ngày nghĩ còn lại: {a[5]}</CardTitle>
    <CardTitle>Số ngày đã làm thêm: {a[6]}</CardTitle>
  </CardBody>
  </div>
</div>
  </>
)
}
export default StaffDetail;
