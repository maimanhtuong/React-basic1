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
import { TextField, SelectField, DateField, NumField } from "./ListField";
import { useDispatch } from "react-redux";
import { addNewStaff, deleteStaff, editStaff } from "../../redux/actionCreator";
// import FormStaffEdit from "./FormEdit";
import { FadeTransform } from "react-animation-components";

function StaffList(props) {
  const staffLength = props.staffs.length;
  const [openModal, setOpenModal] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);

  const dispatch = useDispatch();

  

  const validationSchema = Yup.object({
    name: Yup.string().max(15, "Must be 15 characters or less").required(),
    doB: Yup.date().required(),
    startDate: Yup.date().required(),
  });

  //FORM ADD STAFF
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
              department: '{"id":"Dept01","name":"Sale","numberOfStaff":1}',
              annualLeave: 0,
              overTime: 0,
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              console.log(values);
              dispatch(
                addNewStaff({
                  id: staffLength + 1,
                  name: values.name,
                  doB: values.doB,
                  salaryScale: values.salaryScale,
                  startDate: values.startDate,
                  department: JSON.parse(values.department),
                  annualLeave: values.annualLeave,
                  overTime: values.overTime,
                  image: "/assets/images/cutie.jpg",
                })
              );
              alert("Thêm nhân viên thành công");
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
                      <option
                        key={department.id}
                        value={JSON.stringify(department)}
                      >
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

  //FORM EDIT STAFF
  const FormStaffEdit = (props) => {
    return (
      <div className="container w-50">
        <Modal
          isOpen={openModalEdit}
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
              setOpenModalEdit(false);
            }}
            className="btn btn-danger"
          >
            X
          </button>
          <h1>Edit Staff Form?</h1>
          <Formik
            initialValues={{
              id: props.staff.id,
              name: props.staff.name,
              doB: props.staff.doB,
              salaryScale: props.staff.salaryScale,
              startDate: props.staff.startDate,
              departmentId: props.staff.departmentId,
              annualLeave: props.staff.annualLeave,
              overTime: props.staff.overTime,
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              console.log(values);
              dispatch(
                editStaff({
                  id: values.id,
                  name: values.name,
                  doB: values.doB,
                  salaryScale: values.salaryScale,
                  startDate: values.startDate,
                  departmentId: values.departmentId,
                  annualLeave: values.annualLeave,
                  overTime: values.overTime,
                  image: "/assets/images/cutie.jpg",
                })
              );
              alert("Sửa nhân viên thành công");
              setOpenModalEdit(false);
            }}
          >
            {(formik) => (
              <Form>
                props. <TextField label="Tên" name="name" />
                <DateField label="Ngày sinh" name="doB" />
                <DateField label="Ngày vào công ty" name="startDate" />
                <SelectField name="departmentId">
                  {props.departments.map((department) => {
                    return (
                      <option key={department.id} value={department.id}>
                        {department.id}
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

  // function search(e) {
  //   e.preventDefault();
  //   dispatch(
  //     rootReducer.actions.search(e.target.value)
  //   )
  // }

  //STAFF
  const staff = props.staffs.map((staff) => {
    return (
      <Card key={staff.id} className="col-sm-4">
        <Link to={`${staff.id}`}>
          <CardBody>
            <CardImg src={staff.image} height="300px"></CardImg>
            <CardTitle tag="h5">{staff.name}</CardTitle>
          </CardBody>
        </Link>
        <div className="row ml-5">
          <button
            className="btn btn-danger ml-5"
            onClick={() => {
              if (window.confirm("Are you sure delete this staff?")) {
                dispatch(deleteStaff(staff.id));
              }
            }}
          >
            Delete
          </button>
          <button
            className="btn btn-info ml-5"
            onClick={() => setOpenModalEdit(true)}
          >
            Edit
          </button>
        </div>
        {openModalEdit && (
          <FormStaffEdit staff={staff} departments={props.departments} />
        )}
      </Card>
    );
  });
  return (
    <>
      <Navbar color="info" expand="md" light>
        <Collapse navbar>
          <button
            className="btn btn-danger mx-5"
            onClick={() => setOpenModal(true)}
          >
           Thêm nhân viên +
          </button>
          {openModal && <FormStaff />}

          
        </Collapse>
      </Navbar>
      <FadeTransform
        in
        transformProps={{
          exitTransform: "scale(0.5) translateY(-50%)",
        }}
      >
        <div className="row">{staff}</div>
      </FadeTransform>
    </>
  );
}
export default StaffList;
