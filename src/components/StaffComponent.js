import React, { Component } from "react";
import { STAFFS,DEPARTMENTS } from "./staffs.jsx";
import { Card, CardTitle, CardBody,Navbar,NavbarText,NavbarBrand,Collapse,Nav,UncontrolledDropdown,DropdownMenu,DropdownItem } from "reactstrap";
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
        <div>
  <Navbar
    color="light"
    expand="md"
    light
  >
    <NavbarBrand href="/">
     Ứng dụng quản lý nhân viên v1.0
    </NavbarBrand>
    <Collapse navbar>
      <Nav
        className="me-auto"
        navbar
      >
        
        <UncontrolledDropdown
          inNavbar
          nav
        >
          <DropdownToggle
            caret
            nav
          >
            Số cột hiển thị
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>
               1 Cột
            </DropdownItem>
            <DropdownItem>
               2 Cột
            </DropdownItem>
            <DropdownItem>
               3 Cột
            </DropdownItem>
            <DropdownItem>
               6 Cột
            </DropdownItem>
            
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
      <NavbarText>
        Simple Text
      </NavbarText>
    </Collapse>
  </Navbar>
</div>

          ////////////////////////////
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
