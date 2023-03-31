import { useNavigate, useLocation } from "react-router-dom";
import { useContactCrud } from "../context/ContactCrudContext";
import user from '../images/user.jpg';

const DeleteContact = () => {
    const { removeItem } = useContactCrud();
    const location = useLocation();
    const { id, name, email } = location.state.contact;
    let navigate = useNavigate();

    return (
        <>
            <div className="ui main">
                <div className="ui cards center middle aligned">
                    <div class="card">
                        <div class="content">
                            <img class="right floated mini ui image" src={user} alt='User' />
                            <div class="header">
                                {name}
                            </div>
                            <div class="meta">
                                {email}
                            </div>
                            <div class="description">
                                <strong>Do you really want to delete this contact?</strong>
                            </div>
                        </div>
                        <div class="extra content">
                            <div class="ui two buttons">
                                <button class="ui basic green button" onClick={()=>{
                                    removeItem(id);
                                    navigate("/");
                                }}>Yes</button>
                                <button class="ui basic red button" onClick={()=>{
                                    navigate("/");
                                }}>No</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DeleteContact;