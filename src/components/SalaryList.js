import React,{Component} from "react";
import {Link} from "react-router-dom";
import {Card, CardBody,CardTitle,Breadcrumb,BreadcrumbItem} from "reactstrap"
import dateFormat from "dateformat";

function StaffList(props){
    const staffs=props.staffs.map(staff => {
        return(
            <Card
            key={staff.id}
            className="col-sm-4"
             >
      <CardBody>
        <CardTitle>
          Họ và tên: <h3>{staff.name}</h3>
        </CardTitle>
        <CardTitle>
          Ngày sinh: {dateFormat(staff.doB, "dd,mm,yyyy")}
        </CardTitle>
        <CardTitle>
          Ngày vào công ty: {dateFormat(staff.startDate, "dd,mm,yyyy")}
        </CardTitle>
        <CardTitle>Phòng ban: {staff.department.name}</CardTitle>
        <CardTitle>Số ngày nghĩ còn lại: {staff.annualLeave}</CardTitle>
        <CardTitle>Số ngày đã làm thêm: {staff.overTime}</CardTitle>
        <br></br>
        <CardTitle>Lương: {(staff.salaryScale*3000000+staff.overTime*200000).toFixed()}</CardTitle>

      </CardBody>
          </Card>
        )
    })
    return(
        <>
        <div>
        <div>
        <Breadcrumb>
                <BreadcrumbItem>
                  <Link to="/">Nhân viên</Link>
                </BreadcrumbItem>
                <BreadcrumbItem active>Bảng lương</BreadcrumbItem>
              </Breadcrumb>
        </div>
        <div className="row">
            {staffs}
      </div>
    </div>
      </>
    )
}
export default StaffList;