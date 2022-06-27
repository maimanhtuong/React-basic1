import React from "react";
import {Card, CardBody,CardTitle} from "reactstrap"

function DepartmentList(props){
    const departments=props.staffs.map(department => {
        return(
            <Card
            key={department.id}
            className="col-sm-4"
             >
            <CardBody>
              <CardTitle tag="h5">{department.name}</CardTitle>
              <CardTitle >Số lượng nhân viên: {department.numberOfStaff}</CardTitle>
            </CardBody>
          </Card>
        )
    })
    return(
        <div className="row">
            {departments}
          </div>
    )
}
export default DepartmentList;