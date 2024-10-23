import React, { useState,useEffect} from 'react'
import  {Container,Row,Col,Button}from  'react-bootstrap'
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb.compo'
import { SearchForm } from '../../components/search-form/SearchForm.compo'
import { TicketTable } from '../../components/ticket-table/TicketTable.compo'
import tickets from '../../assets/data/dummy-tickets.json'

export const TicketLists  = () => {

    const [str, setStr] = useState('');
    const [disTicket, setDisTicket] = useState(tickets);

    useEffect(() => {
    }, [str,disTicket])


  const handleOnChange = (e) =>{
    const {value} = e.target;
    setStr(value);
    searchTicket(value);
    console.log(e.target);
    
  }
 const searchTicket = str =>{
    const displayTickets = tickets.filter((row) =>
        row.subject.toLowerCase().includes(str.toLowerCase()));

    console.log(displayTickets)
    setDisTicket(displayTickets)

 }
  return (
    <Container>
        <Row>
            <Col>
            <PageBreadcrumb page="Ticket Lists"/>
            </Col>
        </Row>
        <Row className='mt-4'>
            <Col>
            <Button variant="secondary">Add New Ticket</Button>
            </Col>
            <Col className='text-right'>
            <SearchForm handleOnChange={handleOnChange} str={str}/>
            </Col>
        </Row>
        <hr />

        <Row>
            <Col>
            <TicketTable tickets={disTicket}/>
            </Col>
        </Row>
    </Container>
  )
}


