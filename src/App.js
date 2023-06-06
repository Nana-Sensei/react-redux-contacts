import { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Contacts from './Components/Contacts';
import ContactsForm from './Components/ContactsForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [
        {
          name: "Nana Poku",
          mobile: "026 879 2345",
          location: "Dzorwulu-Accra",
          id: "CTC001"
        },

        {
          name: "Nana Osei",
          mobile: "050 124 4587",
          location: "Adenta-Accra",
          id: "CTC002"
        },
      ]
    }
  }

  addNewContact = (contact) => {
    contact.id = Math.random().toString()
    this.setState({
      contacts: [...this.state.contacts, contact]
    })
  }

  removeContact = (id) => {
    let undeletedContacts = this.state.contacts.filter(contact => contact.id !== id);
    this.setState = ({
      contacts: undeletedContacts
    });
  }

  editContact = (id, updatedContact) => {
    this.setState({
      contacts: this.state.contacts.map(contact => contact.id === id ? updatedContact : contact)
    })
  }

  render() {
    return (
      <>
        <Container fluid style={{ color: "white", backgroundColor: "#b0ecd9", padding: "5rem" }}>
          <Row>
            <Col md="3">
              <h4 style={{color:"#00a9b8"}}>
              <button 
              style={{borderRadius:"15px", 
              fontSize:"20px" , fontWeight:"bold",
              border:"none", 
              backgroundColor:"black", 
              color:"white", 
              padding:"10px"}}>
                Add New Contact
              </button></h4>
              <br />
              <ContactsForm
                addContact={this.addNewContact} />
            </Col>

            <Col>
              <h4 style={{color:"#00a9b8", paddingLeft:"1rem"}}><button 
              style={{borderRadius:"15px", fontWeight:"bold",
              fontSize:"20px" , border:"none", 
              backgroundColor:"black", 
              color:"white", 
              padding:"10px"}}>
                Contacts
              </button></h4>
              <br />
              <Contacts
                contactDetails={this.state.contacts}
                deleteContact={this.removeContact}
                editContact={this.editContact} />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default App;







