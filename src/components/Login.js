import React from 'react';
import axios from 'axios';
import './login.css';

class Login extends React.Component {
    state = {
        email: '',
        usernmae: ''
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.isLogin(true)
        const { email, username } = this.state;
        localStorage.setItem('usercredential', email);
        localStorage.setItem('username', username);
       

    }


    render() {



        return (
            <div className='div-login'>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input className='div-input' type='email' name='email' placeholder='email...' required onChange={this.handleChange} />
                        <input className='div-input' type='text' name='username' placeholder='username...' required onChange={this.handleChange} />
                        <button className='div-button' onSubmit={this.handleSubmit} >Log In</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;