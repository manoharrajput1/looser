import React, { useState,useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import {context} from './App'

const Login = () => {
    const {dispatch} = useContext(context);
    const navigate = useNavigate()
    const [user, setData] = useState({
        email: "",
        password: ""
    })
    let name, value;
    const setUser = (e) => {
        name = e.target.name
        value = e.target.value
        setData({ ...user, [name]: value })
    }
    const getData = async (e) => {
        e.preventDefault()
        const { email, password } = user
        const response = await axios.post('/signin',{email, password})
        await response.data
        await dispatch({type:"USER",payload:true})
        navigate('/home', {state:{user:user}})
        // location('/home')
    }
    return (
        <>
            <form method='post'>
                <div className='container mt-3'>
                    <div className="mb-3">
                        <input type="email" name="email" value={user.email} onChange={setUser} className="form-control" placeholder='Enter Contact Email Here' />
                    </div>
                    <div className="mb-3">
                        <input type="password" name="password" value={user.password} onChange={setUser} className="form-control" placeholder=' Enter Your Password here' />
                    </div>
                    <div className='d-flex'>
                    <button type="submit" onClick={getData} className="btn btn-outline-success mx-auto">Submit</button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Login