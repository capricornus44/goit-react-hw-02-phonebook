import React, { Component } from "react"
import Form from "./components/Form"
import ContactList from "./components/ContactList"
import Filter from "./components/Filter"
import { v4 as uuidv4 } from "uuid"

class App extends Component {
  // nameInputId = uuidv4()
  // numberInputId = uuidv4()

  state = {
    contacts: [],
    filter: "",
  }

  handleAddContact = (data) => {
    const { contacts } = this.state
    const newContact = { ...data, id: uuidv4() }

    if (contacts.map((contact) => contact.name.toLowerCase()).includes(data.name)) {
      alert(`Contact "${data.name}" already exists`)
    } else {
      this.setState((prevState) => ({
        contacts: [newContact, ...prevState.contacts],
      }))
    }
  }

  handleFilter = (event) => {
    const { value } = event.currentTarget
    this.setState({ filter: value })
  }

  getMatchingContacts = () => {
    const { contacts, filter } = this.state

    const optimizedFilter = filter.toLowerCase()

    return contacts.filter((contact) => contact.name.toLowerCase().includes(optimizedFilter))
  }

  render() {
    const { filter } = this.state
    const filteredContacts = this.getMatchingContacts()

    return (
      <>
        <h1>Phonebook</h1>
        <Form onSubmit={this.handleAddContact} />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.handleFilter} />
        <ContactList contacts={filteredContacts} />
      </>
    )
  }
}

export default App
