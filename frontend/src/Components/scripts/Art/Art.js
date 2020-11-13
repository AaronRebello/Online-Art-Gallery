import React, { Component } from 'react'
import {connect} from "react-redux"
import { withRouter } from 'react-router-dom'
import Header from '../../reusable/Header'

class Art extends Component {
    render() {
        const {user} = this.props.auth
        return (
          
            <div className="container">
            <Header/>
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