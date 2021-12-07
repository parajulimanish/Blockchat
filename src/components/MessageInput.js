import React from 'react'

import "./MessageInput.styl"

class MessageInput extends React.Component {
    onSubmit(e) {
        // Behavior of default send button (browser reload) is prohibited
        e.preventDefault()

        // InputGet the text entered in
        const msg = this.refs.txtMessage.value
        this.props.sendMessage(msg)

        // Empty after sending
        this.refs.txtMessage.value = ""

        // Return focus to the input field again
        this.refs.txtMessage.focus()
    }

    render () {
        return (
                    <div id="messageinput" className="blue">
                      <form className="container" onSubmit={ this.onSubmit.bind(this) }>
                        <div className="row">
                          <div className="input-field col s10">
                            <i className="prefix material-icons">chat</i>
                            <input ref="txtMessage" type="text" placeholder="Type your message" />
                            <span className="chip left white">
                              <span>You: { this.props.userAddress }</span>
                            </span>
                          </div>
                          <div className="input-field col s2">
                            <button type="submit" className="waves-effect waves-light btn-floating btn-large blue">
                              <i className="material-icons">send</i>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
        )
    }
}

export default MessageInput
