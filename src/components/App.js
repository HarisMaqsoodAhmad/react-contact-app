// import logo from './logo.svg';
import React, {useState, useEffect} from 'react';
// import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import Profile from './Profile';


function App() {
  const [contacts, setContact] = useState(() => {
    let hs_contacts = JSON.parse(localStorage.getItem("contacts"));
    return hs_contacts? hs_contacts : [];
  });

  const LOCAL_STORAGE_KEY = "contacts";

  const addContact = (contact) => {
    setContact([...contacts, contact]);
  }

  // useEffect(() => {
  //   const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  //   if(retrieveContacts) setContact(retrieveContacts);
  // }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const removeItem = (index) => {
    // let newcontacts = [...contacts];
    // newcontacts.splice(index, 1);
    let newcontacts = contacts.filter((contact, id) => {
      return id !== index;
    });

    setContact(newcontacts);
  }
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  }
  return (
    <div className="ui container">
        <Header />
        <AddContact addContact={addContact} />
        <ContactList contacts={contacts} removeItem={removeItem} />
        {/* <Profile count={count} handleClick={handleClick} /> */}
        {/* <Profile count={count} handleClick={handleClick} /> */}

    </div>
  );
}

export default App;
