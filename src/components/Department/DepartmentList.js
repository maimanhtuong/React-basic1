import React from "react";
import {Card, CardBody,CardTitle} from "reactstrap"
import { Link,useParams } from 'react-router-dom'

function DepartmentList(props){
    const departments=props.departments.map(department => {
        return(
          <Card
          key={department.id}
          className="col-sm-4"
          >
            <Link to={`${department.id}`}>
            <CardBody>
              <CardTitle tag="h5">{department.name}</CardTitle>
              <CardTitle >Số lượng nhân viên: {department.numberOfStaff}</CardTitle>
            </CardBody>
            </Link>
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