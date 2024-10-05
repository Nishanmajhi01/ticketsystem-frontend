import React from 'react'
import PropTypes from 'prop-types'
import{Container,Row,Col,Form, Button} from 'react-bootstrap'

const ResetPassword = ({handleOnChange,email,handleOnResetSubmit,formSwitcher}) => {
  return (
    <div className='py-5 bg-light form-box'>
    <Container>
        <Row className='justify-content-center'>
            <Col md={12}>
            <h1>Reset Password</h1>
            <hr />
            <Form autoComplete="off" onSubmit={handleOnResetSubmit}>
                 <Form.Group>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type='email' onChange={handleOnChange} value={email} placeholder='Email or phone number' name='email' required />
                 </Form.Group>
                 <Button type='submit' className=' my-3' >Reset Password</Button>
            </Form>
            <hr />
            </Col>
        </Row>

        <Row>
          <Col >
          <a href="#!"onClick={()=>formSwitcher('Login')}>Login Now</a>
          </Col>
        </Row>
      
    </Container>
    </div>
  )
}

export default ResetPassword

ResetPassword.propTypes={
  handleOnChange: PropTypes.func.isRequired,
  handleOnResetSubmit: PropTypes.func.isRequired,
  formSwitcher: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
}