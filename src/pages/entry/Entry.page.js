import React ,{useState}from 'react'

import {Container} from 'react-bootstrap'



import './entry.style.css'
import LoginForm from '../../components/Login/Login.compo'
import ResetPassword from '../../components/password-reset/PasswordReset.compo'

const Entry= () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [frmLoad, setFrmLoad] = useState('Login')

  const handleOnChange = e =>{
    const {name,  value} = e.target

    switch(name){
      case 'email':
        setEmail(value)
        break
        case 'password':
        setPassword (value)
        break

        default:
          break
    }
  };
   const handleOnSubmit =e=>{
    e.preventDefault()
    if(!email || !password){
      return alert("Please fill the email or password")
    }
    //TODO call api to submit the form
    console.log(email,password)
   }
   const handleOnResetSubmit =e=>{
    e.preventDefault()
    if(!email){
      return alert("Please fill the email ")
    }
    //TODO call api to submit the form
    console.log(email)
   }

   const formSwitcher = frmType =>{
    setFrmLoad(frmType)

   }

  return (
    <div className="entry-page bg-secondary">
      <Container>
        {frmLoad == 'Login' && <LoginForm handleOnChange={handleOnChange} handleOnSubmit={handleOnSubmit} formSwitcher={formSwitcher} email={email} pass={password}/>}
        {frmLoad == 'Reset' && <ResetPassword handleOnChange={handleOnChange} handleOnResetSubmit={handleOnResetSubmit} formSwitcher={formSwitcher} email={email}/>}
        
      </Container>
    </div>
  )
}

export default Entry
