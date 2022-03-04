import React, { useState} from 'react'



const Dashboard = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  return (
   <h1>Dashboard</h1>
  
  )
}

export default Dashboard;