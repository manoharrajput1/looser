import React from 'react'
import axios from 'axios'
import { useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import {context} from './App'

const About = () => {
  // let udata
  const {dispatch} = useContext(context);
  const navigate = useNavigate()
  const [userData, setUser] = useState({
    id: '',
    name: "",
    email: "",
    file: "",
    phone: "",
    work: ""
  })
  const aboutData = async () => {
    const nuser = await axios.get('/about')
    // console.log(nuser);
    const udata = await nuser.data
    if (udata === 'not logged in') {
      navigate('/signin')
    }
    else {
      setUser({
        id: udata._id,
        name: udata.name,
        email: udata.email,
        file: udata.file,
        phone: udata.phone,
        work: udata.work,
      })
      await dispatch({type:"USER",payload:true})
    }
  }

  useEffect(() => {
    aboutData()
  }, [])
  console.log(userData.file)
  return (
    <>
      <div className='d-flex mt-3 justify-content-center'>
        <div className='w-30 m-5 d-flex justify-content-end '>
          <img className=' image rounded' src={userData.file} alt='pic here' ></img>
        </div>
        <div className='w-50 m-5'>
          <ul className="list-group list-group-flush mt-3 rounded">
            <li className="list-group-item fw-bolder">Id :         {userData.id} </li>
            <li className="list-group-item fw-bolder">Name :       {userData.name} </li>
            <li className="list-group-item fw-bolder">Email :      {userData.email} </li>
            <li className="list-group-item fw-bolder">Mo. Number : {userData.phone} </li>
            <li className="list-group-item fw-bolder">Job :       {userData.work} </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default About