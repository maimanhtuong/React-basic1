import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  Nav,
  Navbar,
  Collapse,
} from "reactstrap";
import dateFormat from "dateformat";

function StaffList(props) {
  const [LocalStaffs, setLocalStaffs] = useState(props.staffs);

  function sortId(str) {
    if (str === "asc") {
      console.log("asc");
      setLocalStaffs(
        [...props.staffs].sort((a, b) => a.id-b.id)
      );
    } else {
      console.log("desc");
      setLocalStaffs( [...props.staffs].sort((a, b) => b.id-a.id)
      );
  }
}


  const staffs = LocalStaffs.map((staff) => {
    return (
      <Card key={staff.id} className="col-sm-4">
        <CardBody>
          <CardTitle>
            Họ và tên: <h3>{staff.name}</h3>
          </CardTitle>
          <CardTitle>
            Mã số nhân viên: <h4>{staff.id+1}</h4>
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
          <CardTitle>
            Lương:{" "}
            {(staff.salaryScale * 3000000 + staff.overTime * 200000).toFixed()}
          </CardTitle>
        </CardBody>
      </Card>
    );
  });
  return (
    <>
      <div>
        <div>
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/">Nhân viên</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Bảng lương</BreadcrumbItem>
          </Breadcrumb>
          <Navbar color="info" expand="md" light>
            <Collapse navbar>
              <Nav className="me-auto" navbar>
                <UncontrolledDropdown inNavbar nav>
                  <DropdownToggle caret nav>
                    Số cột hiển thị
                  </DropdownToggle>
                  <DropdownMenu end>
                    <DropdownItem onClick={() => sortId("asc")}>
                      Id ASC
                    </DropdownItem>
                    <DropdownItem onClick={() => sortId("desc")}>
                      Id DESC
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
        <div className="row">{staffs}</div>
      </div>
    </>
  );
}
export default StaffList;
