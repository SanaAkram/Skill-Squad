import React, { useState ,useContext } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import PropTypes from 'prop-types';
async function loginUser(credentials) {
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }

export function LoginForm(props, { setToken }) {
  const { switchToSignup } = useContext(AccountContext);
  const [email, setemail] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      email,
      password
    });
    setToken(token);
  }
  return (
    <BoxContainer>
      <FormContainer>
        <Input type="email" placeholder="Email" onChange={e => setemail(e.target.value)} />
        <Input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">Forget your password?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton href="/login" type="submit">Signin</SubmitButton>
  
      <Marginer direction="vertical" margin="1em" />
     
      <MutedLink href="#">
        Don't have an accoun?{" "}
        <BoldLink  onClick={switchToSignup}>
          Signup
        </BoldLink>
      </MutedLink>
   
    </BoxContainer>
  );
}
LoginForm.propTypes = {
  setToken: PropTypes.func.isRequired
}
