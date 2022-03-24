import React, { useState ,useContext } from "react";
import { Field, useFormik } from "formik";
import { useNavigate,Link } from "react-router-dom";
import {useDispatch, useSelector} from "react-dom";
import {Alert} from '@material-ui/lab';
import {
  BoldLink,
  BoxContainer,
  FieldContainer,
  FieldError,
  FormContainer,
  FormError,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import * as yup from "yup";
import axios from "axios";
import { AccountContext } from "./accountContext";
import PropTypes from 'prop-types';

const validationSchema = yup.object({
  email: yup.string().required(),
  password: yup.string().required(),
});

export function LoginForm(props) {
  const navigate = useNavigate();
  const { switchToSignup } = useContext(AccountContext);
  const [error, setError] = useState(null);
    // const [response, setresponse] = useState({
    //  Status: false ,
    //  Message: "",
    //   type:""
    // });

  const onSubmit = async (values) => {

    setError(null);
    const response = await axios
      .post("http://127.0.0.1:8000/api/login", values)
      .catch((error) => {
        if (error && error.response) setError(error.response.data.message);
      });

      if (response) {
       alert(response.data.Message);
       navigate('/dashboard')
        // setresponse({Status: response.data.Status, Message:response.data.Message, type: 'success'})

      }
  };

  // const handleSubmit = (e) => {
  //    const response = await axios
  //    .post("http://127.0.0.1:8000/api/login", values)
  //   // .catch((err) => {
  //   //     if (err && err.response) setError(err.response.data.message);
  //   //   });
  //   e.preventDefault();
  //   const data = new FormData(e.currentTarget);
  //   const actualData = {
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   }
  //   // console.log(actualData);
  //   if (actualData.email && actualData.password) {
  //     console.log(actualData);
  //
  //      setErr({status: true, msg:"Login succes !", type: 'success'})
  //     navigate('/Home')
  //
  //   } else {
  //     setErr({status: true, msg:"Invalid Credentials", type: 'error'})
  //   }
  // }





  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,
  });

  return (
    <BoxContainer>
      <FormError>{error ? error : ""}</FormError>
      <FormContainer onSubmit={formik.handleSubmit} id={'login-form'}>
        <FieldContainer>
          <Input
            name="email"
            placeholder="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {
            <FieldError>
              {formik.touched.email && formik.errors.email
                ? formik.errors.email
                : ""}
            </FieldError>
          }
        </FieldContainer>
        <FieldContainer>
          <Input
            name="password"
            type="password"
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {
            <FieldError>
              {formik.touched.password && formik.errors.password
                ? formik.errors.password
                : ""}
            </FieldError>
          }
        </FieldContainer>
        <MutedLink to={'/forgot_password'} >Forgot Password?</MutedLink>
        <Marginer direction="vertical" margin="1em" />
        <SubmitButton type="submit" disabled={!formik.isValid}>
          Login
        </SubmitButton>
      </FormContainer>


      <Marginer direction="vertical" margin={5} />
      <MutedLink href="#">
        Dont have an Account?
        <BoldLink href="#" onClick={switchToSignup}>
          sign up
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
