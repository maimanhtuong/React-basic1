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
  const [sortedField, setSortedField] = useState(null);
  
  let sortedProduct = LocalStaffs;
  if(sortedField !== null){
    sortedProduct = LocalStaffs.sort((a, b) => {
      if(sortedField === "id"){
        return a.id - b.id;
      }
      if(sortedField === "name"){
        return a.name.localeCompare(b.name);
      }
      if(sortedField === "department"){
        return a.department.name.localeCompare(b.department.name);
      }
    }
    );
  }

  const staffs = sortedProduct.map((staff) => {
    return (
      <Card key={staff.id} className="col-sm-4">
        <Link to={`${staff.id}`}>
          <CardBody>
            <CardImg src={staff.image} height="300px"></CardImg>
            <CardTitle tag="h5">{staff.name}</CardTitle>
            <CardTitle tag="h6">{staff.id+1}</CardTitle>
            <CardTitle tag="h6">{staff.department.name}</CardTitle>
          </CardBody>
        </Link>
      </Card>
    );
  });

  function search(e) {
    e.preventDefault();
    const search = e.target.value.toLowerCase();
    console.log(search);
    let staffs = props.staffs.filter((staff) => {
      return staff.name.toLowerCase().includes(search);
    });
    console.log(staffs);

    setLocalStaffs(staffs);
  }

 
  return (
    <>
      <Navbar color="info" expand="md" light>
        <Collapse navbar>
          <Nav className="me-auto" navbar>
            <UncontrolledDropdown inNavbar nav>
              <DropdownToggle caret nav>
               Sắp xếp theo
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem onClick={() => setSortedField('id')}>
                  Id
                </DropdownItem>
                <DropdownItem onClick={() => setSortedField('name')}>
                  Name 
                </DropdownItem>
                <DropdownItem onClick={() => setSortedField('department')}>
                  Department 
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
