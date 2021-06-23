import React, { Component, useState, useEffect } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import ListJoke from './ListJoke';
import { Switch, Route } from 'react-router-dom'
import Header from './Header';
import Favourite from './Favourite';
import EditUserName from './EditUserName';


const Home = ({ handleLogged }) => {

        
    return (
        <div>
            <Header isLogged={handleLogged} />
            <Switch>
                <Route exact path='/' component={ListJoke} />
                <Route exact path='/favourite' component={Favourite} />
                <Route exact path='/edit' component={EditUserName} />
            </Switch>
        </div>
    )
}

export default Home;

/*export class Home extends Component {
    render() {
        return (
            <Form className="Form">
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="username" placeholder="Username" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

        )
    }
}

export default Home;*/