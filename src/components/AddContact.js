import React, { useState, useEffect } from 'react';
import { useContactCrud } from '../context/ContactCrudContext';
import { useNavigate } from 'react-router-dom';

const AddContact = (props) => {
    const {addContact, retrieveContacts} = useContactCrud();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    // state = {
    //     name: "",
    //     email: "",
    // }
    const add = (e) => {
        e.preventDefault();
        if(name === "" || email === ""){
            alert("All fields are requireds!");
            return;
        }
        addContact({name, email});
        setName("");
        setEmail("");
        navigate("/");
    }
    useEffect(() => {
        retrieveContacts();
    }, [retrieveContacts]);

    // render() {
        return (
            <div className='ui main'>
                <h2>Add Contact</h2>
                <form className='ui form' onSubmit={add}>
                    <div className='field'>
                        <label htmlFor="inputName">Name</label>
                        <input type="text" name="name" id="name" placeholder='Name' onChange={(e) => {
                            // this.setState({
                            //     name: e.currentTarget.value,
                            // });
                            setName(e.currentTarget.value);
                        }} value={name} />
                    </div>
                    <div className='field'>
                        <label htmlFor="inputEmail">Email</label>
                        <input type="email" name="email" id="email" placeholder='Email' onChange={(e) => {
                            // this.setState({
                            //     email: e.currentTarget.value,
                            // });
                            setEmail(e.currentTarget.value);
                        }} value={email} />
                    </div>
                    <button className='ui button blue'>Add</button>
                </form>

            </div>
        );
    // }
}

export default AddContact;