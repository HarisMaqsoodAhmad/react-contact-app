import React from 'react';
import user from '../images/user.png';

const ContactCard = (props) => {
    const {name, email} = props.contact;
    return(
        <div className='item'>
            <img className='ui image avatar' src={user} alt="user" />
            <div className='content'>
                <div className='header'>{name}</div>
                <div>{email}</div>
            </div>
            <i className='ui trash icon alternate outline' style={{color: "red", marginTop: "7px"}} title="Delete Item" onClick={() => props.removeItem(props.index) }></i>
            <i className='ui edit icon alternate outline' style={{color: "blue", marginTop: "7px", marginRight: "10px",}} title="Edit Item"></i>
        </div>
    );
}

export default ContactCard;