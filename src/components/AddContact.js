import React from 'react';

class AddContact extends React.Component {
    // constructor(props){
    //     super(props);
    //     this.state ={
    //         name: "",
    //         email: "",
    //     };
    // }
    state = {
        name: "",
        email: "",
    }
    add = (e) => {
        e.preventDefault();
        if(this.state.name === "" || this.state.email === ""){
            alert("All fields are requireds!");
            return;
        }
        this.props.addContact(this.state);
        this.setState({
            name: "",
            email: "",
        });
    }
    render() {
        return (
            <div className='ui main'>
                <h2>Add Contact</h2>
                <form className='ui form' onSubmit={this.add}>
                    <div className='field'>
                        <label htmlFor="inputName">Name</label>
                        <input type="text" name="name" id="name" placeholder='Name' onChange={(e) => {
                            this.setState({
                                name: e.currentTarget.value,
                            });
                        }} value={this.state.name} />
                    </div>
                    <div className='field'>
                        <label htmlFor="inputEmail">Email</label>
                        <input type="email" name="email" id="email" placeholder='Email' onChange={(e) => {
                            this.setState({
                                email: e.currentTarget.value,
                            });
                        }} value={this.state.email} />
                    </div>
                    <button className='ui button blue'>Add</button>
                </form>

            </div>
        );
    }
}

export default AddContact;