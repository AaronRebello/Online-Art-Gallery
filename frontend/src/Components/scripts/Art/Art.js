import React, { Component } from 'react'
import {connect} from "react-redux"
import { withRouter } from 'react-router-dom'

class Art extends Component {
    render() {
        const {user} = this.props.auth
        return (
            <div>
                {user.email}
            </div>
        )
    }
}

function mapStatetoProps  (state) {
    return{
        auth : state.auth
    }
}

export default connect(mapStatetoProps,{}) (withRouter(Art))