import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';

const Login = () => {
  return (
    <form className='login' onSubmit={console.log("success")}>
      <div className="wrapper">
      <div className="user Id">
        <PersonIcon className='person'/>
        <input type="text" />
      </div>
      <div className="user Pass">
        <LockIcon/>
        <input type="password" />
      </div>
      <button>Login</button>
      </div>
      
    </form>
  )
}

export default Login