import React, { useState, useEffect } from 'react'
import { saveComponentAsImage } from 'react-component-export-image';

function Info() {
    const path = window.location.pathname
    const array = path.split("/")
    const id = array[2]

    const [user, setUser] = useState([])

    const style1 = { 
      width: "20rem",
      height: "20rem",
      borderRadius: "50%",
      margin: "auto",
      marginTop : "10rem"
    }

    const style2 = {	
      marginTop : "14rem"
    }

    const style3 = {	
      fontSize : "1.2rem"
    }

    const fetchData = () => {
        fetch("https://reqres.in/api/users/"+id)
          .then(response => {
            return response.json()
          })
          .then(data => {
            setUser(data.data)
            console.log(user);
          })
      }

      useEffect(() => {
        fetchData()
      }, [])

      const downloadAsImage = () => {
        const element = document.getElementById('target-element'); 
      
        saveComponentAsImage(element, {
          fileName: 'react-page',
          fileType: 'png',
        });
      };

  return (
    <div id="target-element" className="container">
      <div className="row">
        <div className="col-md-4">
          <img className="img-fluid" style={style1} src={user.avatar} alt="Profile Avatar" />
        </div>
        <div className="col-md-8" style={style2}>
          <h1>User Info</h1>
          <p  style={style3}>First Name : <span>{user.first_name}</span></p>
          <p  style={style3}>Last Name : <span>{user.last_name}</span></p>
          <p  style={style3}>Email : <span>{user.email}</span></p>
          <button className="btn btn-secondary" onClick={downloadAsImage}>Download Profile</button>
        </div>
      </div>
    </div>
  )
}

export default Info
