import React, { Component } from "react"
import Form from "./components/Form"
import ContactList from "./components/ContactList"
import Filter from "./components/Filter"
import { v4 as uuidv4 } from "uuid"

class App extends Component {
  // nameInputId = uuidv4()
  // numberInputId = uuidv4()

  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  }

  handleAddContact = (data) => {
    const newContact = { ...data, id: uuidv4() }

    this.setState((prevState) => ({
      contacts: [newContact, ...prevState.contacts],
    }))
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
    const { contacts, filter } = this.state
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
