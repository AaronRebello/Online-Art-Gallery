import React, { Component } from "react";
import { TextField, Grid, Card, CardContent, Button } from "@material-ui/core";
import {connect} from "react-redux"
import {onRegister} from "../../Redux/Authentication/AuthAction"
import { withRouter } from "react-router-dom";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      country: "",
    };
  }

  onHandleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = () => {
    const { name, email, password, country } = this.state;
    const newUser = {
      name,
      email,
      password,
      country,
    };
    this.props.onRegister(newUser,this.props.history);
  };

  render() {
    const { name, email, password, country } = this.state;
    return (
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <Card>
            <CardContent>
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
              >
                <TextField
                  id="standard-basic"
                  label="Name"
                  type="text"
                  name="name"
                  value={name}
                  onChange={this.onHandleChange}
                />

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
                <TextField
                  id="standard-basic"
                  label="Country"
                  type="text"
                  name="country"
                  value={country}
                  onChange={this.onHandleChange}
                />
                <Button
                  variant="contained"
                  onClick={this.onSubmit}
                  color="primary"
                >
                  Login
                </Button>
              </Grid>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
}

export default connect(null,{onRegister}) (withRouter(Register));
