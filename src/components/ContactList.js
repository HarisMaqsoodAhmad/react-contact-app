import React from 'react';
import ContactCard from './ContactCard';

const ContactList = (props) => {
    const renderContactListItems = props.contacts.map((contact, i) => {
        return(
            <ContactCard contact={contact} key={i} index={i} removeItem={props.removeItem} />
        );
    });
    return(
        <div className='ui celled list'>
            {renderContactListItems}
        </div>
    );
}

export default ContactList;