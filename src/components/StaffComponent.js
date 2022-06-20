import React, { Component } from "react";
import { STAFFS,DEPARTMENTS } from "./staffs.jsx";
import { Card, CardTitle, CardBody,CardHeader } from "reactstrap";
import dateFormat from "dateformat";
class Staff extends Component {
  constructor() {
    super();
    this.state = { staffs: STAFFS, detail: null };
  }

  detailStaff(staff) {
    this.setState({
      detail: (
        <Card>
          <CardBody>
            <CardTitle>Họ và tên: <h3>{staff.name}</h3></CardTitle>
            <CardTitle>Ngày sinh: {dateFormat(staff.doB,"dd,mm,yyyy")}</CardTitle>
            <CardTitle>Ngày vào công ty: {dateFormat(staff.startDate,"dd,mm,yyyy")}</CardTitle>
            <CardTitle>Phòng ban: {staff.department.name}</CardTitle>
            <CardTitle>Số ngày nghĩ còn lại: {staff.annualLeave}</CardTitle>
            <CardTitle>Số ngày đã làm thêm: {staff.overTime}</CardTitle>
          </CardBody>
        </Card>
      ),
    });
  }

  render() {
    const staff = this.state.staffs.map((staff) => {
      return (
        <Card key={staff.id} onClick={() => this.detailStaff(staff)} className="m-3">
          <CardBody>
            <CardTitle tag="h5">{staff.name}</CardTitle>
          </CardBody>
        </Card>
      );
    });

    return (
      <>
        <div className="container">
          <div className="row">
            {staff}
            </div>
         <h3> Nhấp vào để xem chi tiết nhân viên</h3>
          {this.state.detail}
        </div>
      </>
    );
  }
}

export default Staff;
