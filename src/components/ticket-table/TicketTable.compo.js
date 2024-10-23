import React from 'react'
import {Table, TaBLE} from 'react-bootstrap'
import PropTypes from 'prop-types'
import { propTypes } from 'react-bootstrap/esm/Image'
export const TicketTable = ({tickets}) => {
  return (
    <Table striped bordered hover>
     <thead>
        <tr>
            <th>#</th>
            <th>Subjects</th>
            <th>Status</th>
            <th>Opened Date</th>
        </tr>
     </thead>
     <tbody>
        {tickets.length ?
        tickets.map((row) => (
            <tr key={row.id}>
            <td>{row.id}</td>
            <td>{row.subject}</td>
            <td>{row.status}</td>
            <td>{row.addedAt}</td>
        </tr>

        )):
             <tr>
                <td colSpan="4" className='text-center'>No tickets</td>
            </tr>
         }

     </tbody>
    </Table>
  )
}

TicketTable.prototypes={
tickets: PropTypes.array.isRequired,
}
