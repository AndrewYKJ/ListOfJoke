import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
import { Accordion, Button, Card, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ReactComponent as FavouriteSvg } from '../assets/heart.svg';
import { ReactComponent as ReloadSvg } from '../assets/re.svg';

export class ListJoke extends Component {

    constructor(props) {
        super(props)

        this.state = {
           
            errorMsg: '',
            joke: [],
           
            disabled: [],
        }
    }

    componentDidMount() {
       
        this.refreshList();
   
    }
    refreshList() {

        axios.get('https://official-joke-api.appspot.com/jokes/ten')
            .then(response => (response.data)).then(data => {
                this.setState({ joke: data })

            })
            .catch(error => {
                throw error
            });
    }

    disablebutton(id){
        this.setState({ disabled: [...this.state.disabled, id] });
    }

    addtoFavourite([id, setup, punchline]) {
        const credential = localStorage.getItem('usercredential');
        var userfavourite = { 'id': id, 'setup': setup, 'punchline': punchline };
        console.log(userfavourite);
        var data = localStorage.getItem((credential));
        this.disablebutton(id);
        data = data ? JSON.parse(data) : [];

        data.push(userfavourite);

        localStorage.setItem(credential, JSON.stringify(data));
       
    }
 

    render() {

       
        var { joke } = this.state;
        var disable = this.state;
        return (
            <div>
                <h1>List of Joke<button style={{padding:'50px  ',borderRadius: '50%', border: '0px', backgroundColor:'white'}} onClick={() => this.refreshList()}><ReloadSvg/></button></h1> <br></br>
                {joke.map((elem) =>
                    <Container key={elem.id}>
                        {/* Stack the columns on mobile by making one full-width and the other half-width */}
                        <Row>
                            <Col xs={12} md={8}>
                                <Accordion>
                                    <Card>
                                        <Card.Header>
                                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                                {elem.setup}
                                            </Accordion.Toggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body>{elem.punchline}</Card.Body>
                                        </Accordion.Collapse>
                                    </Card>

                                </Accordion>

                            </Col>
                            <Col xs={6} md={4}>
                                <Button style={{ border: '0px', backgroundColor: 'white' }} key={elem.id} disabled={this.state.disabled.indexOf(elem.id) !== -1}
                                    onClick={() => this.addtoFavourite([elem.id, elem.setup, elem.punchline])} ><FavouriteSvg /></Button>
                            </Col>
                        </Row>

                    </Container>

                )
                }
            </div>
        )
    }
}




export default ListJoke;


