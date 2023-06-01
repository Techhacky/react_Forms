import React,{useState} from 'react'
import './Signup.css'

function Signup() {
    const [formData, setFormData] = useState({
    firstName:'',
    lastName:'',
    email:'',
    password:'',

    })

    const handleInputChange =(event)=>{
    const {name,value} = event.target 
    setFormData((prevData)=>({...prevData,[name]:value,}))

    }

    const handleSubmit =(event)=>{
        event.preventDefault();
        console.log(formData,"The input data")
    }
 
  return (
    <div className='signup-card'>
      <h1>Registration Form</h1>
      <form  onSubmit={handleSubmit}>

    <label htmlFor="">First name</label>
    <input type="text" placeholder='First name' name='firstName' value={formData.firstName} onChange={(event)=>handleInputChange(event)}/>

    <label htmlFor="">Last name</label>
    <input type="text" placeholder='Last name' name='lastName' value={formData.lastName} onChange={(event)=>handleInputChange(event)}/>

    <label htmlFor="">Email</label>
    <input type="email" placeholder='Email' name='email' value={formData.email} onChange={(event)=>handleInputChange(event)}/>

    <label htmlFor="">Password</label>
    <input type="password" placeholder='Password' name='password' value={formData.password} onChange={(event)=>handleInputChange(event)}/>

    <button type='submit'>signup</button>



      </form>
    </div>
  )
}

export default Signup
