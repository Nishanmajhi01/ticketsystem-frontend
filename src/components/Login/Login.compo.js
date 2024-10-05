import React from 'react'
import PropTypes from 'prop-types'
import{Container,Row,Col,Form, Button} from 'react-bootstrap'

const LoginForm = ({handleOnChange,email,pass,handleOnSubmit,formSwitcher}) => {
  return (
    <div className='py-5 bg-light form-box'>
    <Container>
        <Row className='justify-content-center'>
            <Col md={12}>
            <h1>Client Login</h1>
            <hr />
            <Form autoComplete="off" onSubmit={handleOnSubmit}>
                 <Form.Group>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type='email' onChange={handleOnChange} value={email} placeholder='Email or phone number' name='email' required />
                 </Form.Group>
                 <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' value={pass} onChange={handleOnChange} placeholder='Enter password' name='password' required />
                 </Form.Group>
                 <Button type='submit' className=' my-3' >Login</Button>
            </Form>
            <hr />
            </Col>
        </Row>

        <Row>
          <Col >
          <a href="#!" onClick={()=>formSwitcher('Reset')}>Forget password</a>
          </Col>
        </Row>
      
    </Container>
    </div>
  )
}

export default LoginForm

LoginForm.propTypes={
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
  formSwitcher: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  pass: PropTypes.string.isRequired
}