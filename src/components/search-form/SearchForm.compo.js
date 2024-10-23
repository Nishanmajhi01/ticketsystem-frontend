import React from 'react'
import PropTypes from 'prop-types'
import {Form,Row,Col} from 'react-bootstrap'

export const SearchForm = ({handleOnChange, str}) => {
  return (
    <Form>
        <Form.Group as={Row} controlId="formSearch">
            <Form.Label column sm="2" >Search:{" "} </Form.Label>
            <Col sm="10">
            <Form.Control
            name="searchStr"
            onChange={handleOnChange}
            value={str}
            placeholder='Search ...'
            />
            </Col>
        </Form.Group>
      
    </Form>

  )
}

SearchForm.prototypes ={
handleOnChange: PropTypes.func.isRequired,
str: PropTypes.string.isRequired

}
