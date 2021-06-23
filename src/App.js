
import './App.css';
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import  Home from './components/Home';

import Login from './components/Login';

import NoMatch from './components/404Page';


class App extends React.Component {

  state = {
    isLog: false
  }

  handleLogin = (isLog) => this.setState({ isLog })

  render() {
    const { isLog } = this.state;

    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            {
              
            !isLog ?
            <Route exact path='/' render={() => <Login isLogin={this.handleLogin} />} />
            :
            <Route path='/' render={() => <Home handleLogged={this.handleLogin} />} />
          }
         
            <Route path='*' component={NoMatch} />
       
          
          </Switch>
        </BrowserRouter>
       

     
      </div>
    );
  }
}

export default App;
