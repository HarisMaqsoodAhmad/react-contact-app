import React, { useEffect } from 'react';
import { useContactCrud } from '../context/ContactCrudContext';
import ContactCard from './ContactCard';
import { Link } from 'react-router-dom';

const ContactList = (props) => {
    const { contacts, retrieveContacts, searchTerm, searchResult, searchHandler } = useContactCrud();
    let contactList = (searchTerm.length > 1) ? searchResult : contacts;

    useEffect(() => {
        retrieveContacts();
    }, [retrieveContacts]);

    const renderContactListItems = contactList.map((contact, i) => {
        return (
            <ContactCard contact={contact} key={contact.id} index={contact.id} />
        );
    });

    const getSearchTerm = (term) => {
        searchHandler(term);
    }

    return (
        <div className="main">
            <h2>Contact List <Link to="/add"><button className="ui button blue right floated">Add Contact</button></Link></h2>
            
            <div className="ui search">
                <div className="ui fluid icon input">
                    <input type="text" name="searchContact" id="searchContact" placeholder='Search Contacts...' className='prompt' value={searchTerm} onChange={(e) => {
                        getSearchTerm(e.currentTarget.value);
                    }} />
                    <i className="search icon"></i>
                </div>
            </div>
            <div className='ui celled list'>
                {renderContactListItems.length > 0 ? renderContactListItems : "No Contacts available"}
            </div>
        </div>
    );
}

export default ContactList;