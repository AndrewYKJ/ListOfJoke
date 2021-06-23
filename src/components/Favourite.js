import React, { Component, useState, useEffect } from 'react';
import { Accordion, Button, Card, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ReactComponent as TrashSvg } from '../assets/trash.svg';

export class Favourite extends Component {


    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            errorMsg: '',
            favourite: [],
        }
    }

    componentDidMount() {
        this.getFavourite();
    }
    getFavourite() {

        const credential = localStorage.getItem('usercredential');
     
       
        const arrayOfData = localStorage.getItem(credential);
        const d = arrayOfData !== null ? JSON.parse(arrayOfData) : [];
        this.setState({ favourite: d })


        console.log(d);

    }
 
    onDeleteByIndex = (index) => {
        const newfavourite = [...this.state.favourite];
        newfavourite.splice(index, 1);

        this.setState(state => ({
            favourite: newfavourite
        }));
        this.reloadnewfavourtie(newfavourite);
    }

    reloadnewfavourtie(favourite) {
        //console.log(id, setup, punchline);
        const credential = localStorage.getItem('usercredential');
        localStorage.setItem(credential, JSON.stringify(favourite));
    }

    render() {


        const { favourite } = this.state;

        return (
            <div>
                <h1>Favourite Joke</h1><br></br>
               <br></br><br></br>
                {favourite.map((elem,index) =>
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
                                <Button variant="light" key={elem.id}  
                                    onClick={() => this.onDeleteByIndex(index)} ><TrashSvg /></Button>
                            </Col>
                        </Row>

                    </Container>
                )
                }
            </div>
        )
    }
}


export default Favourite;