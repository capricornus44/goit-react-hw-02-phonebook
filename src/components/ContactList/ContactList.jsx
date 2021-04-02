import css from "./ContactList.module.css"

const ContactList = ({ contacts }) => {
  return (
    <ul className={css.list}>
      {contacts.map(({ name, id, number }) => {
        return (
          <li className={css.item} key={id}>
            {name}: {number}
          </li>
        )
      })}
    </ul>
  )
}

export default ContactList
