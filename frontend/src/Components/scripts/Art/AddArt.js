import React, { Component } from "react";

import Header from "../../reusable/Header";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { onAddingArt } from "../../Redux/Art/ArtAction";

class AddArt extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      selectedFile: null,
      description: "",
      price:"",
    };
  }

  onFileChange = (e) => {
    this.setState({
      selectedFile: e.target.files[0],
    });
  };

  onFileSubmit = () => {
    const { description, title,price } = this.state;
    const newArt = {
      title,
      description,
      price,
    };
    // console.log(newResource);
    console.log(this.state.selectedFile);
    this.props.onAddingArt(this.state.selectedFile, newArt);
  };

  render() {
    return (
      <div>
        <Header />
        <React.Fragment></React.Fragment>
      </div>
    );
  }
}

export default connect(null, { onAddingArt })(withRouter(AddArt));
