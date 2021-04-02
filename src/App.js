import React, { Component } from "react"
import Form from "./components/Form"
import ContactList from "./components/ContactList"
import { v4 as uuidv4 } from "uuid"

class App extends Component {
  // nameInputId = uuidv4()
  // numberInputId = uuidv4()

  state = {
    contacts: [],
  }

  handleAddContact = (data) => {
    const newContact = { ...data, id: uuidv4() }

    this.setState((prevState) => ({
      contacts: [newContact, ...prevState.contacts],
    }))
  }

  render() {
    const { contacts } = this.state

    return (
      <>
        <h1>Phonebook</h1>
        <Form onSubmit={this.handleAddContact} />
        <ContactList contacts={contacts} />
      </>
    )
  }
}

export default App
