import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { TicketTable } from '../../components/ticket-table/TicketTable.compo'
import tickets from '../../assets/data/dummy-tickets.json'
import {PageBreadcrumb} from '../../components/breadcrumb/Breadcrumb.compo'
import { Link } from 'react-router-dom'

export const Dashboard = () => {
  return (
    <Container>
        <Row>
            <Col>
            <PageBreadcrumb page="Dashboard"/>
            </Col>
        </Row>
        <Row>
            <Col className='text-center mt-5 mb-2'>
            <Link to='/addticket'>
            <Button variant='secondary' style={{fontSize:'2rem', padding:"30px"}}>Add New Ticket</Button>
            </Link>
            </Col>
        </Row>
        <Row>
            <Col className='text-center mt-3 mb-2'>
            <div>Total tickets: 50</div>
            <div>Pending tickets: 5</div>
            </Col>
        </Row>
        <Row>
            <Col className='mt-3'>Recently Added tickets</Col>
        </Row>
        <hr />

        <Row>
            <Col className='recent-tickets'><TicketTable tickets={tickets}/></Col>
        </Row>

    </Container>
  )
}


