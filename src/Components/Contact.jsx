import React, {useState} from "react";
import { Card, Button, Col, Modal } from "react-bootstrap";
import Image from './IMG.png';
import EditContact from "./EditContact";


const Contact = (props) => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = (e) => {
    e.preventDefault();
    console.log("item deleted!")
    //props.deleteContact(props.contactInfo.id);
  };

  return (
    <>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditContact 
          contactInfo={props.contactInfo}
          editContact={props.editContact}
          closeModal={handleClose}
          />
        </Modal.Body>
        
      </Modal>

      <Col md="3">
        <Card style={{ border: "none", borderRadius:"20px", backgroundColor: "#000000", boxShadow: "0 10px 10px 0 rgba(0, 0, 0, 0.2), 0 4px 20px 0 rgba(0, 0, 0, 0.19)" }}>
          <Card.Img variant="top" src={Image}  />
          <Card.Body style={{ color: "white" }}>
            <p>Codetrain Contact</p>

            <Card.Text>
              <Card.Title>{props.contactInfo.name}</Card.Title>
              <p>{props.contactInfo.mobile}</p>
              <p>{props.contactInfo.location} </p>
            </Card.Text>

            <Button variant="primary" size="sm" onClick={handleShow} style={{ marginRight: "1rem", color: "#000000", backgroundColor: "#85e0c3", border: "none" }}>
              Edit
            </Button>

            <Button variant="primary" size="sm" onClick={handleDelete} style={{ color: "#004547", backgroundColor: "#85e0c3", border: "none" }} >
              Delete
            </Button>

          </Card.Body>
        </Card>
      </Col>
    </>
  )
}

export default Contact;