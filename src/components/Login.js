import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';




class Login extends Component {


    onSubmit = (e) => {
        e.preventDefault();
        //check if user is registered and pw is correctly entered
        //redirect to chat page once logged on

    };


    render() {
        return (
            <div className={'login'}>
                <form onSubmit={this.onSubmit}>
                    <div>
                        User:
                        <input type={'text'} name={'user'}  ref={el => this.input = el}/>
                        <br/>
                        Password:
                        <input type={'text'} name={'password'} ref={el => this.pass = el}/>
                    </div>
                    <button type='submit'>Submit</button>
                </form>
                <Link to={'/register'}><button>Register</button></Link>
            </div>
        )
    }

}

export default withRouter(Login);