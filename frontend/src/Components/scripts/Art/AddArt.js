import React, { Component } from "react";

import Header from "../../reusable/Header";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { onAddingArt } from "../../Redux/Art/ArtAction";
import { Button, Typography, Grid, TextField } from "@material-ui/core";

class AddArt extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      selectedFile: null,
      description: "",
      price: "",
    };
  }

  onFileChange = (e) => {
    this.setState({
      selectedFile: e.target.files[0],
    });
  };

  onFileSubmit = () => {
    const { description, title, price } = this.state;
    const newArt = {
      title,
      description,
      price,
    };
    // console.log(newResource);
    console.log(this.state.selectedFile);
    this.props.onAddingArt(this.state.selectedFile, newArt);
  };

  _onHandleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { title, price, description, } = this.state;

    return (
      <React.Fragment>
        <Header />
        <div className="container">
          <form >
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <TextField
                id="standard-basic"
                label="Title"
                name="title"
                value={title}
                onChange={this._onHandleChange}
              />

              <TextField
                id="standard-basic"
                label="Price"
                name="price"
                value={price}
                onChange={this._onHandleChange}
              />

              <TextField
                id="standard-basic"
                label="Description"
                name="description"
                value={description}
                onChange={this._onHandleChange}
              />
            </Grid>
          </form>

          {this.state.selectedFile ? (
            <React.Fragment>
              <Typography variant="body-2">
                {this.state.selectedFile.name}
              </Typography>
              <Button
                color="primary"
                size="large"
                variant="contained"
                component="label"
                onClick={this.onFileSubmit}
                className="mt-5"
              >
                Submit
              </Button>
            </React.Fragment>
          ) : (
            <Button
              color="primary"
              size="large"
              variant="contained"
              component="label"
              className="mt-5"
            >
              Upload Art
              <input
                type="file"
                onChange={this.onFileChange}
                style={{ display: "none" }}
              />
            </Button>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default connect(null, { onAddingArt })(withRouter(AddArt));
