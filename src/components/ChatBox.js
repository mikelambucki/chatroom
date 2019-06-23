import React, { Component } from 'react'
import './ChatBox.css';
import { connect } from 'react-redux';


class ChatBox extends Component {


    render() {

        return (
            <div className="chatBox" >
                <div className="messages">
                    { this.props.messages.map(item => <div className={"message"}>{item.user + ': ' + item.message}</div>)}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    messages: state.msg.messages || []
});

export default connect(mapStateToProps)(ChatBox);