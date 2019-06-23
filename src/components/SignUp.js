import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { signUp } from '../actions/buttonActions';
import { connect } from "react-redux";


/* TO DO */
/* - Implement authentication and encryption for user+pass during registration */


class SignUp extends Component {

    constructor(props){
        super(props);

        this.state = {
            redirect: false
        }
    }

    //Uses form input and calls action signUp
    //(Client(SignUp) -> Action(signUp) -> Reducer and Server
    onSubmit = (e) => {
        e.preventDefault();
        const info = {
            name: this.input.value,
            password: this.pass.value
        };
        console.log("reached button press in register page...");
        this.props.signUp(info);
        this.input.value = "";
        this.pass.value = "";
        this.setState({redirect: true});
    };


    //Redirects to home page once registered
    render() {
        if(this.state.redirect === true) {
            return (
                <Redirect to={'/'}/>
            )
        }
        else {
            return (

                <div className={'signup'}>
                    <form onSubmit={this.onSubmit}>
                        Registration
                        <div>
                            User:
                            <input type={'text'} name={'user'} ref={el => this.input = el}/>
                            <br/>
                            Password:
                            <input type={'text'} name={'password'} ref={el => this.pass = el}/>
                        </div>
                        <button type='submit'>Submit</button>
                    </form>

                </div>
            )
        }
    }

}

export default connect(null, { signUp }) (SignUp);