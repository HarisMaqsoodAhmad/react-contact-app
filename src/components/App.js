import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import EditContact from './EditContact';
import ContactDetail from './ContactDetail';
import DeleteContact from './DeleteContact';
// import api from '../api/contact';
import { ContactCrudContextProvider } from '../context/ContactCrudContext';

function App() {
  return (
    <div className="ui container">
      <Router>
        <Header />
        <ContactCrudContextProvider>
          <Routes>
            <Route path='/' exact element={ <ContactList /> } />
            <Route path='/add' exact element={ <AddContact /> } />
            <Route path='/edit/:id' exact element={ <EditContact /> } />
            <Route path='/contact/:id' exact element={ <ContactDetail /> } />
            <Route path='/delete/:id' exact element={ <DeleteContact /> } />
            {/* <AddContact addContact={addContact} /> */}
            {/* <ContactList contacts={searchTerm.length > 0 ? searchResult : contacts} removeItem={removeItem} searchTerm={searchTerm} searchHandler={searchHandler} setSearchTerm={setSearchTerm} />   */}
          </Routes>
        </ContactCrudContextProvider>
      </Router>
    </div>
  );
}

export default App;
