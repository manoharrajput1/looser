import React from 'react'
import axios from 'axios'
import {useEffect, useState, useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import {context} from './App'

const Contact = () => {
  const {dispatch} = useContext(context);
  const navigate = useNavigate()  
  const [userData, setUser] = useState({
    name: "",
    email: "",
    phone: "",
  })

  const aboutData = async () => {
    const nuser = await axios.get('/about')
    const udata = await nuser.data
    if (udata === 'not logged in') {
      navigate('/signin')
    } else {
      setUser({
        name: udata.name,
        email: udata.email,
        phone: udata.phone,
      })
      await dispatch({type:"USER",payload:true})
    }
  }
  const setUserData = async (e) => {
    const name = e.target.name
    const value = e.target.value
    setUser({ ...userData, [name]: value })
  }
  const sendData = async (e) => {
    e.preventDefault()
    const { name, email, phone, message } = userData
    const response = await axios.post('/contact', { name, email, phone, message })
    const resp = await response.data
    console.log(resp);
    setUser({ ...userData, message: '' })
    navigate('/contact')
  }
  useEffect(() => {
    aboutData()
  }, [])
  console.log(userData)
  return (
    <>
      <form method='post'>
        <div className='container mt-3'>
          <div className="list-group list-group-horizontal d-flex ">
            <input type="text" name="name" value={userData.name}  disabled style={{textAlign : "center"}} className="list-group-item flex-fill mx-auto" />
            <input type="email" name="email" value={userData.email} disabled style={{textAlign : "center"}} className="list-group-item flex-fill" />
            <input type="text" name="phone" value={userData.phone} disabled style={{textAlign : "center"}} className="list-group-item flex-fill" />
          </div>
          <div className="mb-3 mt-2">
            <textarea type="text" style={{textAlign : "center"}} name="message" value={userData.message} onChange={setUserData} className="form-control" placeholder=' Enter Your Message here' />
          </div>
          <div className='d-flex'>
            <button type="submit" onClick={sendData} className="btn btn-success mx-auto shadow ">Submit</button>
          </div>
        </div>
      </form>
    </>
  )
}

export default Contact