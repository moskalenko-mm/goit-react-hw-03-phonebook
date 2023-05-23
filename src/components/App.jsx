import { Component } from 'react';
import { Container } from './App.styled';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const localData = localStorage.getItem('contacts');
    console.log(localData);
    if (localData) this.setState({ contacts: JSON.parse(localData) });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts.length !== this.state.contacts.length) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = ({ name, number }) => {
    const { contacts } = this.state;

    if (contacts.find(item => item.name.toLowerCase() === name.toLowerCase())) {
      return alert(`Contact "${name}" is already in contacts list`);
    }

    const contact = {
      id: nanoid(),
      name,
      number,
    };
    this.setState(prevState => {
      return { contacts: [contact, ...prevState.contacts] };
    });
  };

  handleSearch = event => {
    this.setState({ filter: event.target.value.toLowerCase() });
  };

  handleClick = id => {
    this.setState(prevState => {
      return { contacts: prevState.contacts.filter(item => item.id !== id) };
    });
  };

  render() {
    const { filter, contacts } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );

    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter handelSearch={this.handleSearch} />
        <ContactList
          contacts={filteredContacts}
          handleClick={this.handleClick}
        />
      </Container>
    );
  }
}

export default App;
