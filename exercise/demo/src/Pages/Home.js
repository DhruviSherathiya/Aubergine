import React, { useState, useEffect } from 'react'
import Card from './Card'
function Home() {
    const [users, setUsers] = useState([])

  const fetchData = () => {
    fetch("https://reqres.in/api/users?page=2")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data.data)
        console.log(users);
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="container">
    <div className="row">
      {users.map(user => (
        <div key={user.id} className="col-lg-4 col-md-6 col-sm-12">
          <Card user={user}/>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Home
