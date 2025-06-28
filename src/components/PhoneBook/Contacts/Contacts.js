import React from 'react'
import css from './Contacts.module.css'

export default function Contacts({contacts, onDelete}) {
  return (
          <ul className={css.Contacts__list}>
      {contacts.map(contacts => (
        <li key={contacts.id} className={css.Contacts__contact}>
          <p>{contacts.name}</p>
          <p>{contacts.number}</p>
          <button className={css.Contacts__button} type="button" onClick={() => onDelete(contacts.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  )
}

