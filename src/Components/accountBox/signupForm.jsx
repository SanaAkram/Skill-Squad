
import React, { useContext,useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle,faCheckCircle, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import zxcvbn from 'zxcvbn';
import { Button,Link } from '@material-ui/core';
import { useFormik } from "formik";
import {GoogleLogin} from 'react-google-login';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Icon  from './icon';
import useStyles from './styles';
import * as yup from "yup";
import axios from "axios";
import { AUTH } from '../constants/actionTypes';
import {
  BoldLink,
  BoxContainer,
  FieldContainer,
  FieldError,
  FormContainer,
  FormSuccess,
  Input,
  MutedLink,
  SubmitButton,
  FormError,
  Validity
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import './validity.css';
import { nodeName } from "jquery";
import validator from 'validator'


const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

const validationSchema = yup.object({
  fullName: yup
    .string()
    .min(3, "Please enter you real name")
    .required("Full name is required!"),
  email: yup.string().email("Please enter a valid email address").required(),
  password: yup
    .string()
    .matches(PASSWORD_REGEX, "Please enter a strong password")
    .required(),
  confirmPassword: yup
    .string()
    .required("Please confirm your password")
    .when("password", {
      is: (val) => (val && val.length > 0 ? true : false),
      then: yup
        .string()
        .oneOf([yup.ref("password")], "Password does not match"),
    }),
});







export function SignupForm(props) {

  //Gsignin
  const dispatch = useDispatch();
    const history = useHistory();
    const googleSuccess = async (res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;

    
        try {
         dispatch({ type: AUTH, data: { result, token } });
    
           history.push('/');
        } catch (error) {
          console.log(error);
        }
      };
      const googleError = () => alert('Google Sign In was unsuccessful. Try again later');
    
      const classes = useStyles();
  //Gsignin
  const [show, setShow] = useState(false);
const { switchToSignin } = useContext(AccountContext);



//pasword strength meter

    const handleShowHide =() =>{
      setShow(!show);
      //  PasswordStrength meter
    };

  const [ password, setPassword] = useState('');
  const testResult = zxcvbn(password);
  
const num = testResult.score * 100/4;
  
  const changePasswordColor =   () => ( {
    width : `${num}%`,
    background :  funcProgressColor(),
    height : ' 6px'
  })
  const funcProgressColor = () => {
    switch(testResult.score) {
      case 0:
        return '#828282';
      case 1:
        return '#EA1111';
      case 2:
        return '#FFAD00';
      case 3:
        return '#9bc158';
      case 4:
        return '#00b500';
        default:
          return nodeName;
      
    }
  }
 //pasword strehntg meter
//const valid = ( item, v_icon, inv_icon) => {
//let text = document.querySelector (`#$[item]`);
//text.style.opacity = 1;
//};
//const handleInputChange = e => {
//const txt = e.target.value;
//if(txt.match(/[A-Z]/) != null){
  //valid("capital" , "fa-check" , "fa-times");
 //}
//};
//const handleShowhide = () => {
  //setShow(!show);
//};

const App = () => {
  
  const [errorMessage, setErrorMessage] = useState('')
  
  const validate = (value) => {
  
    if (validator.isStrongPassword(value, {
      minLength: 8, minLowercase: 1,
      minUppercase: 1, minNumbers: 1, minSymbols: 1
    })) {
      setErrorMessage('Is Strong Password')
    } else {
      setErrorMessage('Is Not Strong Password')
    }
  }
  
  return (
    <div style={{
      marginLeft: '200px',
    }}>
      <pre>
        <h2>Checking Password Strength in ReactJS</h2>
        <span>Enter Password: </span><input type="text"
          onChange={(e) => validate(e.target.value)}></input> <br />
          <span style={{
          fontWeight: 'bold',
          color: 'red',
        }}>{errorMessage}</span>
      </pre>
    </div>
  );
}
const [success, setSuccess] = useState(null);
const [error, setError] = useState(null);

const onSubmit = async (values) => {
  const { confirmPassword, ...data } = values;

  const response = await axios
    .post("http://localhost:3000/api/v1/register", data)
    .catch((err) => {
      if (err && err.response) setError(err.response.data.message);
      setSuccess(null);
    });

  if (response && response.data) {
    setError(null);
    setSuccess(response.data.message);
    formik.resetForm();
  }
};

const formik = useFormik({
  initialValues: {
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  },
  validateOnBlur: true,
  onSubmit,
  validationSchema: validationSchema,
});

console.log("Error", error);
  return (
 

    <BoxContainer>
       {!error && <FormSuccess>{success ? success : ""}</FormSuccess>}
      {!success && <FormError>{error ? error : ""}</FormError>}
  
      <FormContainer onSubmit={formik.handleSubmit}>
      <FieldContainer>
          <Input
            name="fullName"
            placeholder="Full Name"
            value={formik.values.fullName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <FieldError>
            {formik.touched.fullName && formik.errors.fullName
              ? formik.errors.fullName
              : ""}
          </FieldError>
        </FieldContainer>
        <FieldContainer>
          <Input
            name="email"
            placeholder="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <FieldError>
            {formik.touched.email && formik.errors.email
              ? formik.errors.email
              : ""}
          </FieldError>
        </FieldContainer>
        <FieldContainer>
        <Input
        name="password"
         type={show ? "text" : "password"} 
        placeholder="Password" 
        // onChange={ e => setPassword(e.target.value)}
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        />
        <FieldError>
            {formik.touched.password && formik.errors.password
              ? formik.errors.password
              : ""}
          </FieldError>
        </FieldContainer>
        {show ? (
       <FontAwesomeIcon 
       className="faEye" icon={faEye} 
         
          id="show_hide" 
          
          onClick={handleShowHide}
          />

          ) : (
            <FontAwesomeIcon 
            className="faEyeslash" icon={faEyeSlash} 
              
               id="show_hide" 
               
               onClick={handleShowHide}
               />

          )}
        <FormContainer>
       <Input 
        name="confirmPassword"
        type= {show ? "text" : "password"}
        placeholder="Confirm Password" 
        // onChange={handleInputChange}
        value={formik.values.confirmPassword}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        /> 
         <FieldError>
            {formik.touched.confirmPassword && formik.errors.confirmPassword
              ? formik.errors.confirmPassword
              : ""}
          </FieldError>
      </FormContainer>
        
       
           <div id="password-strength" 
            
           style={changePasswordColor()}
            >

           </div>
        
    
      <Validity id="container" >
      
       <div id="capital">
         <FontAwesomeIcon className="fa-times-circle" icon={faTimesCircle}  />
         <FontAwesomeIcon  className="fa-check-circle" icon={faCheckCircle}  />
        <span >  Capital Letters</span>
       </div>
       <div id="small">
       <FontAwesomeIcon className=" fa-times-circle" icon={faTimesCircle}  />
         <FontAwesomeIcon  className=" fa-check-circle" icon={faCheckCircle}  />
 
        <span >  Small Letters</span>
       </div>
       <div id="char">
       <FontAwesomeIcon className=" fa-times-circle" icon={faTimesCircle}  />
         <FontAwesomeIcon  className=" fa-check-circle" icon={faCheckCircle}  />
 
        <span >  Special Characters</span>
       </div>
       <div id="num">
       <FontAwesomeIcon className=" fa-times-circle" icon={faTimesCircle}  />
         <FontAwesomeIcon  className=" fa-check-circle" icon={faCheckCircle}  />
 
        <span >  Numbers</span>
       </div>
       
       <div id="more8">
       <FontAwesomeIcon className="fa-times-circle" icon={faTimesCircle}  />
         <FontAwesomeIcon  className=" fa-check-circle" icon={faCheckCircle}  />
 
        <span >  8+ Characters</span>
       </div>
        
      
       </Validity>
      
      <Marginer direction="vertical" margin="1em" />
        <SubmitButton type="submit" disabled={!formik.isValid}>
          Signup
        </SubmitButton>
        </FormContainer>
       <GoogleLogin
            clientId="393187504719-870o8ako76qor4oo8d3vracjm9ai5a1o.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button className={classes.googleButton} 
              fullWidth onClick={renderProps.onClick}
                disabled={renderProps.disabled} 
                startIcon={<Icon />}
                 variant="contained">
                   
                Google Sign In
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleError}
            cookiePolicy="single_host_origin"
          />
    <Marginer direction="vertical" margin={5} />
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          sign in
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}


