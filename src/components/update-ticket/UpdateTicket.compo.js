import React from 'react'
import {Form,Button} from 'react-bootstrap'
import PropTypes from 'prop-types'

export const UpdateTicket = ({msg,handleOnChange,handleOnSubmit}) => {
  return (
    <Form onSubmit={handleOnSubmit}>
        <Form.Label>Reply</Form.Label>
        <br/>
        <Form.Text>Please reply your message here</Form.Text>
        <Form.Control 
        value={msg}
        onChange={handleOnChange}
        as="textarea" 
        row="5" 
        name="detail"
        />
        <div className="text-end mt-3 mb-3">
        <Button variant='secondary' type='submit' >Reply</Button>
        </div>
    </Form>
  )
}

UpdateTicket.prototypes={
    msg: PropTypes.string.isRequired,
    handleOnchange: PropTypes.func.isRequired,
    handleOnSubmi: PropTypes.func.isRequired
}


