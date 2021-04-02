import { Component } from "react"

// import css from "./Form.module.css"

class Form extends Component {
  state = {
    name: "",
    number: "",
  }

  handleChange = (event) => {
    const { name, value } = event.currentTarget

    this.setState({ [name]: value })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    this.props.onSubmit(this.state)
    this.reset()
  }

  reset = () => {
    this.setState({
      name: "",
      number: "",
      id: "",
    })
  }

  render() {
    // const { name, number } = this.state
    return (
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

        <button type="submit" onSubmit={this.handleAddContact}>
          Add contact
        </button>
      </form>
    )
  }
}

export default Form
