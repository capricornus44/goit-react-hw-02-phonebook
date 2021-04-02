import React, { Component } from "react"
import { v4 as uuidv4 } from "uuid"

class App extends Component {
  nameInputId = uuidv4()

  state = {
    contacts: [],
    name: "",
    number: "",
  }

  // contact = [
  //   { name: "", id: null },
  //   { name: "", id: null },
  //   { name: "", id: null },
  //   { name: "", id: null },
  // ]

  handleChange = (event) => {
    const { name, value } = event.currentTarget

    this.setState({ [name]: value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
  }

  // handleAddContact = (event) => {
  //   const { contacts, name } = this.state
  //   contacts.push(name)
  //   console.log(contacts)
  // }

  render() {
    // const { name, number } = this.state

    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={this.state.name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              onChange={this.handleChange}
            />
          </label>

          <label>
            Number
            <input
              type="tel"
              name="number"
              value={this.state.number}
              pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
              title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
              required
              onChange={this.handleChange}
            />
          </label>

          <button type="submit" onAddContact={this.handleAddContact}>
            Add contact
          </button>
        </form>

        <div>
          <h2>Contacts</h2>
          <ul>
            <li>tel</li>
            <li>tel</li>
            <li>tel</li>
          </ul>
        </div>
      </>
    )
  }
}

export default App
