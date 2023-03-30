// import logo from './logo.svg';
import React, {useState, useEffect} from 'react';
// import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import api from '../api/contact';


function App() {
  // const [contacts, setContact] = useState(() => {
  //   let hs_contacts = JSON.parse(localStorage.getItem("contacts"));
  //   return hs_contacts? hs_contacts : [];
  // });
  // const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContact] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  //Retreive Contacts
  const retrieveContacts = async () => {
    const response = await api.get("/contact");
    return response.data;
  }


  const addContact = async (contact) => {
    const newid = (contacts[contacts.length-1])? contacts[contacts.length-1].id + 1 : 1;
    const request = {
      id: newid,
      ...contact
    }

    const response = await api.post("/contact", request);
    setContact([...contacts, response.data]);
  }

  useEffect(() => {
    // const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // if(retrieveContacts) setContact(retrieveContacts);
    const getAllContacts = async () =>{
      const allContact = await retrieveContacts();
      if(allContact) setContact(allContact);
    }
    getAllContacts();

  }, []);

  // useEffect(() => {
  //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  // }, [contacts]);

  const removeItem = async (id) => {
    // let newcontacts = [...contacts];
    // newcontacts.splice(index, 1);
    await api.delete(`/contact/${id}`);

    let newcontacts = contacts.filter((contact) => {
      return id !== contact.id;
    });

    setContact(newcontacts);
  }
  return (
    <div className="ui container">
        <Header />
        <AddContact addContact={addContact} />
        <ContactList contacts={contacts} removeItem={removeItem} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    </div>
  );
}

export default App;
