import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

function ContactList({ contacts }) {
    return (
        <div className={css.ContactList}>
            <h3 className={css.ContactList__title}>ContactList</h3>
            <ul>
                {contacts().map(contact => {
                    return (
                        <Contact
                            key={contact.id}
                            id={contact.id}
                            name={contact.name}
                            number={contact.number}
                        />
                    )
                })}
            </ul>
        </div>
    )
}

export default ContactList;