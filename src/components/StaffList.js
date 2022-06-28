import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardImg,
  CardTitle,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  Nav,
  Navbar,
  Collapse,
} from "reactstrap";

function StaffList(props) {
  const [LocalStaffs, setLocalStaffs] = useState(props.staffs);

  const staffs = LocalStaffs.map((staff) => {
    return (
      <Card key={staff.id} className="col-sm-4">
        <Link to={`${staff.id}`}>
          <CardBody>
            <CardImg src={staff.image}></CardImg>
            <CardTitle tag="h5">{staff.name}</CardTitle>
          </CardBody>
        </Link>
      </Card>
    );
  });

  function search(e) {
    e.preventDefault();
    const search = e.target.value.toLowerCase();
    let staffs = props.staffs.filter((staff) => {
      return staff.name.toLowerCase().includes(search);
    });

    setLocalStaffs(staffs);
  }
  function sortName(str) {
    if (str === "asc") {
      console.log("asc");
      setLocalStaffs(
        [...props.staffs].sort((a, b) => {
          return a.name-b.name;
        })
      );
    } else {
      console.log("desc");
      setLocalStaffs([...props.staffs].sort((a, b) => {
        return b.name-a.name;
      }));
    }
  }
  return (
    <>
      <Navbar color="info" expand="md" light>
        <Collapse navbar>
          <Nav className="me-auto" navbar>
            <UncontrolledDropdown inNavbar nav>
              <DropdownToggle caret nav>
               Sắp xếp tên
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem onClick={() => sortName("asc")}>
                  Name ASC
                </DropdownItem>
                <DropdownItem onClick={() => sortName("desc")}>
                  Name DESC
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <input
            type="text"
            placeholder="Tìm kiếm nhân viên"
            className="form-control"
            onChange={search}
          />
        </Collapse>
      </Navbar>
      <div className="row">{staffs}</div>
    </>
  );
}
export default StaffList;
