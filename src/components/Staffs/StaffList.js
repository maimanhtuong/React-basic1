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
import { Formik, Form } from "formik";
import Modal from "react-modal";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { TextField, SelectField, DateField } from "./ListField";
import rootReducer from "../../redux/rootReducer";

function StaffList(props) {
  const [openModal, setOpenModal] = useState(false);
  
  const dispatch = useDispatch();
 
 
  const staff = props.staffs.map((staff) => {
    return (
      <Card key={staff.id} className="col-sm-4">
        <Link to={`${staff.id}`}>
          <CardBody>
            <CardImg src={staff.image} height="300px"></CardImg>
            <CardTitle tag="h5">{staff.name}</CardTitle>
          </CardBody>
        </Link>
      </Card>
    );
  });

  const validationSchema = Yup.object({
    name: Yup.string().max(15, "Must be 15 characters or less").required(),
    doB: Yup.date().required(),
    startDate: Yup.date().required(),

  });
  const FormStaff = () => {
    return (
      <div className="container w-50">
        <Modal
          isOpen={openModal}
          style={{
            content: {
              top: "50%",
              left: "50%",
              right: "auto",
              bottom: "auto",
              marginRight: "-50%",
              transform: "translate(-50%, -50%)",
            },
          }}
        >
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            className="btn btn-danger"
          >
            X
          </button>
          <h1>Are You Sure You Want to Continue?</h1>
          <Formik
            initialValues={{
              name: "",
              doB: "",
              salaryScale: 1,
              startDate: "",
              department: {id: 'Dept01', name: 'Sale', numberOfStaff: 1},
              annualLeave: 0,
              overTime: 0,
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              dispatch(
                rootReducer.actions.addStaff({
                  id: props.staffs.length + 1,
                  name: values.name,
                  doB: values.doB,
                  salaryScale: values.salaryScale,
                  startDate:values.startDate ,
                  department: (values.department),
                  annualLeave: values.annualLeave,
                  overTime: values.overTime,
                  image: "/assets/images/cutie.jpg",
                }))
                alert("Thêm nhân viên thành công")
              setOpenModal(false);
              
            }}
          >
            {(formik) => (
              <Form>
                <TextField label="Tên" name="name" />
                <DateField label="Ngày sinh" name="doB" />
                <DateField label="Ngày vào công ty" name="startDate" />
                <SelectField name="department">
                  {props.departments.map((department) => {
                    return (
                      <option key={department.id} value={JSON.stringify(department)}>
                        {department.name}
                      </option>
                    );
                  })}
                </SelectField>
                <TextField label="Hệ số lương" name="salaryScale" />
                <TextField label="Số ngày nghỉ còn lại" name="annualLeave" />
                <TextField label="Số ngày đã làm thêm" name="overTime" />
                <button className="btn btn-dark mt-3" type="submit">
                  Add
                </button>
              </Form>
            )}
          </Formik>
        </Modal>
      </div>
    );
  };

  function search(e) {
    e.preventDefault();
    dispatch(
      rootReducer.actions.search(e.target.value)
    )
  }

  return (
    <>
      <Navbar color="info" expand="md" light>
        <Collapse navbar>
         
          <button
            className="btn btn-danger mx-5"
            onClick={() => setOpenModal(true)}
          >
            +
          </button>
          {openModal && <FormStaff />}

          <input
            type="text"
            placeholder="Tìm kiếm nhân viên"
            className="form-control"
            onChange={search}
          />
        </Collapse>
      </Navbar>
      <div className="row">{staff}</div>
    </>
  );
}
export default StaffList;
