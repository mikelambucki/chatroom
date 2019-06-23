import React, { Component } from 'react';
import { connect } from 'react-redux';
import { chatMessage } from '../actions/buttonActions';


class ChatBar extends Component {




    onSubmit = (e) => {
        e.preventDefault();

        const post = {
            user: 'john',
            message: this.input.value //this.state.message
        };

        this.props.chatMessage(post);
        this.input.value = "";

    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <input type='text' name='message'  ref={el => this.input = el}/>

                    </div>

                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    user: state.user,
    message: state.message
});



export default connect(mapStateToProps, { chatMessage }) (ChatBar);
