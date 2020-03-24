import React from "react";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { FormGroup, Button, Row, Col } from "reactstrap";

export default function Formulario() {
  const formSchema = Yup.object().shape({
    Email: Yup.string()
      .required("Campo Requerido")
      .email("Correo Electronico Invalido")
      .max(255, `Máximo 255 caracteres`),
    UserName: Yup.string()
      .min(5, `Mínimo 5 caracteres`)
      .max(25, `Máximo 25 caracteres`)
      .required("Campo Requerido"),
    Password: Yup.string()
      .required("Campo Requerido")
      .min(5, `Mínimo 5 caracteres`),
    MobilePhone: Yup.number()
      .required("Campo Requerido")
      .min(8, `Mínimo  8 caracteres`)
  });

  return (
    <>
      <Formik
        initialValues={{
          Email: "",
          UserName: "",
          Password: "",
          MobilePhone: ""
        }}
        validationSchema={formSchema}
        onSubmit={values => console.log(values)}
      >
        <Form>
          <FormGroup>
            <label htmlFor="UserName">Nombre Usuario: </label>
            <Field
              className="form-control"
              name="UserName"
              placeholder=""
              type="text"
            />
            <ErrorMessage
              name="UserName"
              component="div"
              className="field-error text-danger"
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="Email">Correo Electronico: </label>
            <Field
              className="form-control"
              name="Email"
              placeholder=""
              type="email"
            />
            <ErrorMessage
              name="Email"
              component="div"
              className="field-error text-danger"
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="Password">Contraseña: </label>
            <Field
              className="form-control"
              name="Password"
              placeholder=""
              type="password"
            />
            <ErrorMessage
              name="Password"
              component="div"
              className="field-error text-danger"
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="MobilePhone">Teléfono: </label>
            <Field
              className="form-control"
              name="MobilePhone"
              placeholder=""
              type="number"
            />
            <ErrorMessage
              name="MobilePhone"
              component="div"
              className="field-error text-danger"
            />
          </FormGroup>
          <Row>
            <Col lg={12} md={12}>
              <Button
                color="primary"
                className="mr-1 mb-1 btn-block"
                type="submit"
              >
                Guardar
              </Button>
            </Col>
          </Row>
        </Form>
      </Formik>
    </>
  );
}
