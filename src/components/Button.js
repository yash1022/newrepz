import React, { Component } from 'react';

export default class Button extends Component {
    render() {
        let { handle_next, handle_prev } = this.props;

        return (
            <div className="p_button">
                <button type="button" className="btn btn-secondary prev" onClick={handle_prev}>Previous</button>
                <button type="button" className="btn btn-secondary nxt" onClick={handle_next}>Next</button>
            </div>
        );
    }
}
