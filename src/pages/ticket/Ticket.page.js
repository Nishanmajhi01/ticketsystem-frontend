import React,{useEffect,useState} from 'react'
import  {Container,Row,Col, Button} from  'react-bootstrap'
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb.compo'
import tickets from '../../assets/data/dummy-tickets.json'
import { MessageHistory}  from '../../components/message-history/MessageHistory.compo'
import { UpdateTicket } from '../../components/update-ticket/UpdateTicket.compo'
import {useParams} from 'react-router-dom'

// const ticket = tickets[0]

export const Ticket = () => {


  const {tId} = useParams();
const [message, setMessage] = useState("");
const [ticket, setTicket] = useState("");

useEffect(() => {
  for (let i=0; i<tickets.length; i++){
    if(tickets[i].id == tId){
      setTicket(tickets[i])
      continue
    }
    }
}, [message,tId])


const handleOnChange = e =>{
  setMessage(e.target.value);

}

const handleOnSubmit =e=>{
  alert("Form is Submitted")
}

  return (
    <Container>
        <Row>
            <Col>
            <PageBreadcrumb page="Ticket"/>
            </Col>
        </Row>
        <Row>
            <Col className='text-weight-bolder text-secondary'>
            {tId}
            <div className="subject1">Subject : {ticket.subject}</div>
            <div className="date">Ticket Opened : {ticket.addedAt}</div>
            <div className="status">Status : {ticket.status}</div>
            </Col>
            <Col className='text-end'>
            <Button variant='outline-secondary'> Close Ticket</Button>
            </Col>
        </Row>
        <Row className='mt-4'>
          <Col>
          {ticket.history && <MessageHistory msg={ticket.history}/>}
          
          </Col>
        </Row>
        <hr />

        <Row className='mt-4'>
          <Col>
          <UpdateTicket 
          msg={message}
          handleOnChange={handleOnChange}
          handleOnSubmit={handleOnSubmit}
          />
          </Col>
        </Row>

    </Container>
  )
}


