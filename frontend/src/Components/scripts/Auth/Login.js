import React, { Component } from "react";
import { TextField, Grid, Card, CardContent, Button } from "@material-ui/core";
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import {onLogin} from "../../Redux/Authentication/AuthAction"

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  onHandleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit =()=>{
      const {email,password} = this.state
      console.log(email,password)
      const newUser ={
        email,
        password,
      }
    this.props.onLogin(newUser,this.props.history)
  }

  render() {
    const { email, password } = this.state;
    return (
      <Card style={{marginTop:50, marginLeft:500, marginRight:500,backgroundColor:"yellow"}} >
      <center>
      <h1>Login</h1></center>
        <CardContent>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <TextField
              id="standard-basic"
              label="Email"
              type="email"
              name="email"
              value={email}
              onChange={this.onHandleChange}
            />
            <TextField
              id="standard-basic"
              label="Password"
              type="password"
              name="password"
              value={password}
              onChange={this.onHandleChange}
            />
            <Button variant="contained" onClick={this.onSubmit} color="primary" style={{marginTop:20,}}>
              Login
            </Button>
          </Grid>
        </CardContent>
      </Card>
    );
  }
}

export default connect(null,{onLogin})(withRouter(Login))