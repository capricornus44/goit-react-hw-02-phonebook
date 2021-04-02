import React, { Component } from "react"
import From from "./components/Form"
import { v4 as uuidv4 } from "uuid"

class App extends Component {
  nameInputId = uuidv4()

  state = {
    contacts: [],
  }

  // contact = [
  //   { name: "", id: null },
  //   { name: "", id: null },
  //   { name: "", id: null },
  //   { name: "", id: null },
  // ]

  // handleAddContact = (event) => {
  //   const { contacts, name } = this.state
  //   contacts.push(name)
  //   console.log(contacts)
  // }

  render() {
    return (
      <>
        <From />
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
