import React from 'react';
import ContactCard from './ContactCard';

const ContactList = (props) => {
    const renderContactListItems = props.contacts.map((contact, i) => {
        
        if(props.searchTerm && (contact.name.toLowerCase().indexOf(props.searchTerm.toLowerCase()) === -1) && (contact.email.toLowerCase().indexOf(props.searchTerm.toLowerCase()) === -1)){
            return '';
        }

        return(
            <ContactCard contact={contact} key={contact.id} index={contact.id} removeItem={props.removeItem} />
        );
    });
    return(
        <div className="main">
            <h2>Contact List</h2>
            <div className="ui search">
                <div className="ui icon input">
                    <input type="text" name="searchContact" id="searchContact" className='' value={props.searchTerm} onChange={(e) => {
                        props.setSearchTerm(e.target.value);
                    }} />
                    <i className="search icon"></i>
                </div>
            </div>
            <div className='ui celled list'>
                {renderContactListItems}
            </div>
        </div>
    );
}

export default ContactList;