import { useState } from "react";
import axios from 'axios'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'


export default function Register() {
  const navigate = useNavigate()
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  })


  const registerUser = async (e) => {
  e.preventDefault();
  const {name, email, password} = data
  try {
    const {data} = await axios.post('/register', {
      name, email, password
    })
    if(data.error){
      toast.error(data.error)
    } else{
      setData({})
      toast.success('Login Succesful. Welcome!')
      navigate('./login')
    }
  } catch (error) {
    console.log(error)
  }
}

  return (
    <>
      <section id="reg-main-header">
        <div className="container">
          <div className="flex-container">
            <div className="header">
              <h1>Sign up <br /> with <span className='title'>Leuv</span> <br /> today</h1>
              <p>If you already have an account <br /> you can <a href="/">login here</a></p>
            </div>
            <div className="form">
              <form onSubmit={registerUser}>
                <div className="form-group">
                  <input type="text" placeholder='Enter name...' value={data.name} onChange={(e)=> setData({...data, name: e.target.value})}/>
                </div>
                <div className="form-group">
                  <input type="email" placeholder='Enter email...' value={data.email} onChange={(e)=> setData({...data, email: e.target.value})}/>
                </div>
                <div className="form-group">
                  <input type="password" placeholder='Enter password...' value={data.password} onChange={(e)=> setData({...data, password: e.target.value})}/>
                </div>
                <button type='submit'>Sign up</button>
              </form>

              <div className="socials">
                <div className="title-socials">
                  <p>Or sign up with</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
