import React from 'react'
import {Button, Container,Form,Row,Col} from 'react-bootstrap'
import PropTypes from 'prop-types'
import './add-ticket-form.style.css'

export const AddTicketForm = ({handleOnSubmit,handleOnChange,frmDt,frmDataError}) => {
    console.log(frmDt);
  return (
    <Container className='mt-3 add-new-ticket pt-5 bg-light text-secondary'>
        <h1 className='text-secondary text-center'>Add New Ticket</h1>
        <hr />
        <Form autoComplete='off' onSubmit={handleOnSubmit}>
            <Form.Group as={Row} className='mb-4'>
                <Form.Label column sm={3}>Subject</Form.Label>
                <Col sm={9}>
                <Form.Control
                name='subject'
                value={frmDt.subject}
                onChange={handleOnChange}
                placeholder='Enter subject'
                required
                />
                <Form.Text className='text-danger'>{frmDataError.subject && "Subject is required!"}</Form.Text>
                </Col>
            </Form.Group>

            <Form.Group as={Row} className='mb-4'>
                <Form.Label column sm={3}>Issue Found</Form.Label>
                <Col sm={9}>
                <Form.Control
                type='date'
                name='issuedate'
                onChange={handleOnChange}
                value={frmDt.issuedate}
                required
                />
                </Col>
            </Form.Group>

            <Form.Group className='mb-4'> 
                <Form.Label>Text</Form.Label>
                <Form.Control
                as="textarea"
                name='detail'
                rows='5'
                onChange={handleOnChange}
                value={frmDt.detail}
                required
                />
            </Form.Group>
            <Button className='mt-2 mb-4' type='submit' variant='secondary' block >Submit</Button>
        </Form>
    </Container>
  )
}


AddTicketForm.propTypes ={
    handleOnSubmit: PropTypes.func.isRequired,
    handleOnChange: PropTypes.func.isRequired,
    frmDt: PropTypes.object.isRequired,
    frmDataError: PropTypes.object.isRequired,

}