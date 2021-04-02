import css from "./ContactList.module.css"

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={css.list}>
      {contacts.map(({ name, id, number }) => {
        return (
          <li className={css.item} key={id}>
            {name}: {number}
            <button className={css.deleteButton} onClick={() => onDeleteContact(id)}>
              Delete
            </button>
          </li>
        )
      })}
    </ul>
  )
}

export default ContactList
