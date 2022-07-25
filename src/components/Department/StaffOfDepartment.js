import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardImg,
  CardTitle,
  Navbar,
  Collapse,
} from "reactstrap";



function StaffOfDepartment(props) {
 
  const staff = props.staffsDe.map((staff) => {
    return (
      <Card key={staff.id} className="col-sm-4">
          <CardBody>
            <CardImg src={staff.image} height="300px"></CardImg>
            <CardTitle tag="h5">{staff.name}</CardTitle>
          </CardBody>
      </Card>
    );
  });

  

  return (
    <>
      <div className="row">{staff}</div>
    </>
  );
}
export default StaffOfDepartment;
