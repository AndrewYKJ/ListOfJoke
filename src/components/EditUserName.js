import React from 'react';
import Home from './Home';
import { Redirect } from 'react-router-dom';
class EditUserName extends React.Component {
    state = {
        username: '',
        redirect: false,
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }
    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const { username } = this.state;
        localStorage.setItem('username', username);
        this.setRedirect();
    }


    renderRedirect = () => {
        if (this.state.redirect) {
            this.setState({
                redirect: false
            })
            return <Redirect to='/edit' />
        }
    }


    render() {





        return (
            <div className='div-login'>
                <div> {this.renderRedirect()}
                    <form onSubmit={this.handleSubmit}>
                        Edit Name
                        <input className='div-input' type='text' name='username' placeholder='username...' required onChange={this.handleChange} />

                        <button className='div-button' onSubmit={this.handleSubmit}  >Confirm changes</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default EditUserName;