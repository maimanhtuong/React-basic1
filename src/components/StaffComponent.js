import React, { Component } from "react";
import { STAFFS } from "./staffs.jsx";
import { Card, CardTitle, CardBody } from "reactstrap";

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
            <CardTitle>{staff.id}</CardTitle>
            <CardTitle>{staff.name}</CardTitle>
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
          Nhấp vào để xem chi tiết nhân viên
          {this.state.detail}
        </div>
      </>
    );
  }
}

export default Staff;
