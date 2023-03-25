import { React, useState } from 'react'
import { useNavigate } from "react-router-dom"
import axios from 'axios'

const Register = () => {

    const navigate = useNavigate()
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        work: "",
        file:"",
        password: "",
        cpassword: ""
    })
    let name, value;
    const setUserData = async(e) => {
        name = e.target.name
        value = e.target.value
        setUser({ ...user, [name]: value })
    
    }
    const setImageData = async (e) =>{
        const image = e.target.files[0]
        const image64 = await convert(image)
        console.log(image64);
        setUser({ ...user, file: image64 })
    }
    function convert(file){
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader()
            fileReader.readAsDataURL(file)
            fileReader.onload = ()=>{
                resolve(fileReader.result)
            }
        })
    }

    const sendData = async (e) => {
        e.preventDefault()
        const { name, email, phone, work,file, password, cpassword } = user
        const response = await axios.post('/signup',{name, email,phone, work, file, password, cpassword })
        const resp = await response.json
        console.log(resp);// 
        navigate('/signin') 
    }
    

    return (
        <>
            <form method='post' >
                <div className='container mt-3'>
                    <div className="mb-3">
                        <input type="text" name="name" value={user.name} onChange={setUserData} className="form-control" placeholder='Enter Your Name Here' />
                    </div>
                    <div className="mb-3">
                        <input type="email" name="email" value={user.email} onChange={setUserData} className="form-control" placeholder='Enter Contact Email Here' />
                    </div>
                    <div className="mb-3">
                        <input type="number" name="phone" value={user.phone} onChange={setUserData} className="form-control" placeholder='Enter Contact Number Here' />
                    </div>
                    {/* <div className="mb-3">
                    <input type="number" name="age" value={data.age} onChange={setUserData} className="form-control" placeholder='Enter Your Age Here '/>
                    </div> */}
                    <div className="mb-3">
                        <input type="text" name="work" value={user.job} onChange={setUserData} className="form-control" placeholder='Enter Your Job Here ' />
                    </div>
                    <div className="mb-3">
                    <input type="file" name="file" onChange={setImageData} className="form-control" placeholder='Upload Image Here'/>
                    </div>
                    {/* <FileBase64 type='file' name='image'  multiple={false} onDone={ ({base64})=>setUser({ ...user, image: base64 })}/> */}
                    <div className="mb-3">
                        <input type="password" name="password" value={user.password} onChange={setUserData} className="form-control" placeholder=' Enter Password here' />
                    </div>
                    <div className="mb-3">
                        <input type="password" name="cpassword" value={user.cpassword} onChange={setUserData} className="form-control" placeholder=' Confirmm Password Here' />
                    </div>
                    <div className='d-flex'>
                    <button type="submit" onClick={sendData} className="btn btn-outline-success mx-auto">Submit</button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Register