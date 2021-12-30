import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';


import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Services from './pages/Service/Services';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer';
import Courses from './pages/Courses/Courses';
import Account from './Components/Account';
const App = () => {
  return (
    <Router>
    <Navbar/>
    <main>
      <Switch>
        <Route path="/Home" exact>
          <Home/>
        </Route>
        <Route path="/about" exact>
          <About/>
        </Route>
        <Route path="/service" exact>
          <Services/>
        </Route>
        <Route path="/Courses" exact>
          <Courses />
        </Route>
        <Route path="/contact" exact>
          <Contact/>
        </Route>
        <Route path="/Account" exact>
           
          <Account/>
        </Route>
        <Redirect to="/" />
      </Switch>
    </main>
    <Footer />
   </Router>
  );
}

export default App;
