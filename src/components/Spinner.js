import React, { Component } from 'react'

export class Spinner extends Component {
    render() {
        return (
            <div>
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <strong role="status">Loading...</strong>
                </div>
            </div>
        )
    }
}

export default Spinner
