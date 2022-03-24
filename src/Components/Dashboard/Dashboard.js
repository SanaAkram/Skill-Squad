import React, { useState} from 'react'
import {useNavigate} from 'react-router-dom';
import  {
  SubmitButton,
} from "../accountBox/common";

const Dashboard = () => {
  const navigate = useNavigate()
  const handleLogout = () => {
    console.log("Logout Clicked !");
    navigate('/Account')
  }
  return (
      <>
      <p>Dashboard</p>
      <SubmitButton onClick={handleLogout}> Logout </SubmitButton>

  </>
  )
}

export default Dashboard;