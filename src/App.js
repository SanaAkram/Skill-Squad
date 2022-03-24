import React , { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Routes
} from 'react-router-dom';


import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Services from './pages/Service/Services';
import Navbar from './Components/Navbar/Navbar';
import Courses from './pages/Courses/Courses';
import Dashboard from './Components/Dashboard/Dashboard';
import {LoginForm}  from "./Components/accountBox/loginForm";
import styled from "styled-components";
import { FooterContainer } from './Components/Footer/containers/footer'
import { AccountBox } from "./Components/accountBox";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const App = () => {
 
  return (
      <Router>
           <Navbar />


           <Routes>
            <Route path="/Home" exact element=<Home /> />


            <Route path="/about" exact  element=<About/> />

            <Route path="/service" exact  element=<Services /> />

            <Route path="/Courses" exact  element=<Courses /> />

            <Route path="/contact" exact  element=<Contact/> />
            <Route path="/Account" exact element=<AccountBox /> />
            <Route path="/dashboard" exact element=<Dashboard /> />

            </Routes>
          {/*<AppContainer ><AccountBox /> </AppContainer>*/}

        <FooterContainer />
  </Router>

  );
}

export default App;
