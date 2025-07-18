import React, { Component } from 'react';
import { Form } from './Form/Form';
import { nanoid } from 'nanoid';
import Container from './Container';
import Contacts from './Contacts';
import Filter from './Filter/Filter';

export class PhoneBook extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;
    if (nextContacts !== prevContacts) {
      localStorage.setItem('contacts', JSON.stringify(nextContacts));
    }
  }

  handleSubmit = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    this.setState(state => ({
      contacts: [...state.contacts, contact],
    }));
  };

  handleRemove = (id) => {
    console.log("🚀 ~ App ~ id :", id )
    
    this.setState(state => ({
        contacts: state.contacts.filter(contact => contact.id !== id),
        }));
  };
  onCharge = (e) => {

    this.setState({ filter: e.target.value });
  };

  filtredContact = () => {
const {contacts, filter} = this.state;
return contacts.filter(contact =>
  contact.name.toLowerCase().includes(filter.toLowerCase())
);
  };


  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSubmit} />
        <Filter onCharge={this.onCharge} value={this.state.filter}/>
        <Contacts contacts={this.filtredContact()} onDelete={this.handleRemove}/>
      </Container>
    );
  }
}
