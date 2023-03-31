import React, { useState, useEffect } from 'react';
import { useContactCrud } from '../context/ContactCrudContext';
import { useNavigate, useLocation } from 'react-router-dom';

const EditContact = (props) => {
    const location = useLocation();
    const {id, name, email} = location.state.contact;
    const {updateContact, retrieveContacts} = useContactCrud();
    const [newName, setNewName] = useState(name);
    const [newEmail, setNewEmail] = useState(email);
    const navigate = useNavigate();

    const update = (e) => {
        e.preventDefault();
        if(newName === "" || newEmail === ""){
            alert("All fields are requireds!");
            return;
        }
        updateContact({id: id, name: newName, email: newEmail});
        navigate("/");
    }
    useEffect(() => {
        retrieveContacts();
    }, [retrieveContacts]);

    return (
        <div className='ui main'>
            <h2>Update Contact</h2>
            <form className='ui form' onSubmit={update}>
                <div className='field'>
                    <label htmlFor="inputName">Name</label>
                    <input type="text" name="name" id="name" placeholder='Name' onChange={(e) => {
                        setNewName(e.currentTarget.value);
                    }} value={newName} />
                </div>
                <div className='field'>
                    <label htmlFor="inputEmail">Email</label>
                    <input type="email" name="email" id="email" placeholder='Email' onChange={(e) => {
                        setNewEmail(e.currentTarget.value);
                    }} value={newEmail} />
                </div>
                <button className='ui button blue'>Update</button>
            </form>
        </div>
    );
}

export default EditContact;