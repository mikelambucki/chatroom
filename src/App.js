import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
//import ChatBox from "./components/chatbox";
//import Postform from "./components/ChatBar";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import store from './store'
import 'flexboxgrid/css/flexboxgrid.min.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';

function App() {

    const logoStyle = {
        width: '2em',
        height: '3em'
    }

    return (
        <Provider store={store}>
            <Router>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" style={logoStyle}/>
                        <Route exact path={'/'} component={Login}/>
                        <Route path={'/register'} component={SignUp}/>
                    </header>
                </div>
            </Router>
        </Provider>
    );
}

export default App;
