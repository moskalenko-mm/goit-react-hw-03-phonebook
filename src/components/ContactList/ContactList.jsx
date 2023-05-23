import PropTypes from 'prop-types';
import css from '../ContactList/ContactList.module.css';

const ContactList = ({ contacts, handleClick }) => {
  return (
    <ul className={css.contactList}>
      {contacts.map(contact => {
        return (
          <li key={contact.id}>
            <p className={css.contact}>
              {contact.name}: {contact.number}
            </p>
            <button
              type="button"
              className={css.btn}
              onClick={() => handleClick(contact.id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default ContactList;
