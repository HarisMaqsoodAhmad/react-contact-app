import React from 'react';
// import { useContactCrud } from '../context/ContactCrudContext';
import user from '../images/user.png';
import { Link } from 'react-router-dom';

const ContactCard = (props) => {
    // const {removeItem} = useContactCrud();
    const {id, name, email} = props.contact;
    return(
        <div className='item'>
            <img className='ui image avatar' src={user} alt="user" />
            <div className='content'>
                <Link to={`/contact/${id}`} state={{ contact: props.contact }}>
                    <div className='header'>{name}</div>
                    <div>{email}</div>
                </Link>
            </div>
            {/* <Link to={`/delete/${id}`}><i className='ui trash icon alternate outline' style={{color: "red", marginTop: "7px"}} title="Delete Item" onClick={() => removeItem(props.index) }></i></Link> */}
            <Link to={`/delete/${id}`} state={{contact: props.contact}}><i className='ui trash icon alternate outline' style={{color: "red", marginTop: "7px"}} title="Delete Item"></i></Link>
            <Link to={`/edit/${id}`} state={{contact: props.contact}}><i className='ui edit icon alternate outline' style={{color: "blue", marginTop: "7px", marginRight: "10px",}} title="Edit Item"></i></Link>
        </div>
    );
}

export default ContactCard;