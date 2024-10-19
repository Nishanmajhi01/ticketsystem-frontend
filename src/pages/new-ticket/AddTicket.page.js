import React, { useState,useEffect} from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb.compo'
import { AddTicketForm } from '../../components/add-ticket-form/AddTicketForm.compo'
import { shortText } from '../../utils/validation'

const initialFrmDt ={
    subject:"",
    issuedate: "",
    detail:"",
   }

const initialFrmError ={
    subject: false,
    issuedate: false,
    detail: false,
   }


export const AddTicket  = () => {

    const [frmData, setFrmData] = useState(initialFrmDt);
    const [frmDataError, setFrmDataError] = useState(initialFrmError);


    useEffect(() => {},{frmData,frmDataError},[frmData,frmDataError]);

    const handleOnChange =e=>{
        const{name,value}=e.target;

        setFrmData({
            ...frmData,
            [name]:value,
        })
    }


    const handleOnSubmit = async (e) =>{
        e.preventDefault();

        setFrmDataError(initialFrmError);

        const isSubjectValid = await shortText(frmData.subject);

        if (!isSubjectValid) {
            setFrmDataError((prev) => ({
              ...prev,
              subject: true,
            }));
            console.log("Validation failed");
            return; // Stop submission if validation fails
          }
          // If all validations pass, proceed with submission
          console.log("Form submitted successfully", frmData);
        };




  return (
    <Container>
        <Row>
            <Col>
            <PageBreadcrumb page="New Ticket"/>
            </Col>
        </Row>
        <Row>
            <Col>
            <AddTicketForm
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            frmDt={frmData}
            frmDataError={frmDataError}
            />
            </Col>
        </Row>
    </Container>
  )
}


