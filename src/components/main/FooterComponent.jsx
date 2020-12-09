import React, { Component } from 'react'

class FooterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <footer className = "footer">
                    <span className="text-muted">All Rights Reserved 2020 @Time Card Application</span>
                    <p >Terms and Conditions Apply</p>
                </footer>
            </div>
        )
    }
}

export default FooterComponent
