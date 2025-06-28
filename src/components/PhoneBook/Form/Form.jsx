import React, { Component } from 'react';
import { toast } from 'react-toastify';
import css from './Form.module.css'

export class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({ name: '', number: '' });
    toast.success('Write contact!');
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <form onSubmit={this.handleFormSubmit} className={css.Form__form}>
          <label className={css.Form__label}>
            Name
            <input
              className={css.Form__input}
              type="text"
              name="name"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              placeholder="Name"
              onChange={this.handleChange}
              value={name}
            />
          </label>
          <label className={css.Form__label}>
            Number
            <input
              className={css.Form__input}
              type="tel"
              name="number"
              // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              placeholder="Number"
              onChange={this.handleChange}
              value={number}
            />
          </label>

          <button className={css.Form__button} type="submit">
            Add
          </button>
        </form>
      </>
    );
  }
}
