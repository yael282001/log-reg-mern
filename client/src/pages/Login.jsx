import { useState } from "react"
import axios from 'axios'

export default function Login() {
  const [data, setData] = useState({
    email: '',
    password: '',
  })


  const loginUser = (e) =>{
    e.preventDefault()
    axios.get('/')

  }

  return (
    <>
      <section id="login-main-header">
        <div className="container">
          <div className="flex-container">
            <div className="header">
              <h1>Sign in <br /> with <span className='title'>Leuv</span> <br /> today</h1>
              <p>If you don't have an account <br /> you can <a href="/">register here</a></p>
            </div>

            <form onSubmit={loginUser}>
              <div className="form-group">
                <input type="email" placeholder='Enter email...' value={data.email} onChange={(e)=> setData({...data, email: e.target.value})}/>
              </div>
              <div className="form-group">     
                <input type="password" placeholder='Enter password...' value={data.password} onChange={(e)=> setData({...data, password: e.target.value})}/>
              </div>
            <button type='submit'>Login</button>
            </form>            
          </div>
        </div>
      </section>
    </>
  )
}
