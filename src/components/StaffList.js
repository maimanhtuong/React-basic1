import React,{Component} from "react";
import {Link} from "react-router-dom";
import {Card, CardBody,CardImg,CardTitle} from "reactstrap"

function StaffList(props){
    const staffs=props.staffs.map(staff => {
        return(
            <Card
            key={staff.id}
            className="col-sm-4"
             >
            <Link to={`${staff.id}`}>
            <CardBody>
              <CardImg src={staff.image}></CardImg>
              <CardTitle tag="h5">{staff.name}</CardTitle>
            </CardBody>
            </Link>
          </Card>
        )
    })
    return(
        <div className="row">
            {staffs}
          </div>
    )
}
export default StaffList;