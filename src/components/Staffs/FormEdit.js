import { Formik, Form } from "formik";
import Modal from "react-modal";
import * as Yup from "yup";
import { TextField, SelectField, DateField } from "./ListField";
import { Dispatch } from "react";
import { editStaff } from "../../redux/actionCreator";

const validationSchema = Yup.object({
    name: Yup.string().max(15, "Must be 15 characters or less").required(),
    doB: Yup.date().required(),
    startDate: Yup.date().required(),

  });
const FormStaffEdit = (props) => {
    const dispatch = Dispatch();
    return (
      <div className="container w-50">
        <Modal
          isOpen={props.openModalEdit}
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
              props.setOpenModalEdit(false);
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
              department: 
                "{\"id\":\"Dept01\",\"name\":\"Sale\",\"numberOfStaff\":1}"
              ,
              annualLeave: 0,
              overTime: 0,
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              console.log(values);
              dispatch(
               editStaff({
                  id:  1,
                  name: values.name,
                  doB: values.doB,
                  salaryScale: values.salaryScale,
                  startDate:values.startDate ,
                  department: JSON.parse(values.department),
                  annualLeave: values.annualLeave,
                  overTime: values.overTime,
                  image: "/assets/images/cutie.jpg",
                }))
                alert("Thêm nhân viên thành công")
              props.setOpenModal(false);
              
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

  export default FormStaffEdit