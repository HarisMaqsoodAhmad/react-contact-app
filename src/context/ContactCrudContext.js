import { createContext, useContext, useState } from "react";
import api from '../api/contact';

const contactsCrudContext = createContext();

export function ContactCrudContextProvider({children}){
    const [contacts, setContact] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResult, setSearchResult] = useState([]);

    //Retreive Contacts
    const retrieveContacts = async () => {
        const response = await api.get("/contact");
        if(response.data) setContact(response.data);
    }
    //Delete Contacts
    const removeItem = async (id) => {
        await api.delete(`/contact/${id}`);
        let newcontacts = contacts.filter((contact) => {
          return id !== contact.id;
        });
        setContact(newcontacts);
    }
    //Add Contacts
    const addContact = async (contact) => {
        const newid = (contacts[contacts.length - 1]) ? contacts[contacts.length - 1].id + 1 : 1;
        const request = {
          id: newid,
          ...contact
        }
        const response = await api.post("/contact", request);
        if(response.data) setContact([...contacts, response.data]);
    }

    //Update Contacts
    const updateContact = async (contactDetails) => {
        const response = await api.put(`/contact/${contactDetails.id}`, contactDetails);
        const { id } = response.data;
        if(response.data) 
        setContact(
            contacts.map((contact) => {
                return (contact.id === id)? { ...response.data } : contact;
            })
        );
    }
    //Search Contacts
    const searchHandler = (term) => {
        setSearchTerm(term);
        // retrieveContacts();
        if (term !== "") {
          const newContactList = contacts.filter((contact) => {
            return Object.values(contact).join(" ").toLowerCase().includes(term.toLowerCase());
          })
          setSearchResult(newContactList);
        //   setContact( newContactList );
        }
        else {
          setSearchResult(contacts);
        }
    }

    const value = {
        contacts,
        searchTerm,
        searchResult,
        retrieveContacts,
        removeItem,
        addContact,
        updateContact,
        searchHandler,
    }

    return <contactsCrudContext.Provider value={ value }>
        {children}
    </contactsCrudContext.Provider>
}

export function useContactCrud() {
    return useContext(contactsCrudContext);
}