import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Header from "../../reusable/Header";
import { Button, Card, CardContent, CircularProgress, Typography } from "@material-ui/core";
import { onFetchingArt } from "../../Redux/Art/ArtAction";
import { DATA_STATE } from "../../Redux/dataState";

class Art extends Component {
  componentDidMount() {
    this.props.onFetchingArt();
  }

  render() {
    console.log(this.props.art);
    const { dataState } = this.props.art;
    if (
      dataState === DATA_STATE.NOT_INITIALIZED ||
      dataState === DATA_STATE.FETCHING
    ) {
      return (
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <CircularProgress />
            </div>
          </div>
        </div>
      );
    } else if (dataState === DATA_STATE.FETCHED_FAILED) {
      <div className="container">
        <div className="row">
          <div className="col-md-12">Something went wrong.</div>
        </div>
      </div>;
    } else {
      const { art } = this.props.art;
      if (art.length > 0) {
        return (
          <div className="container">
            <Header />
            <div className="row">
              <div className="col-md-12">
              <div className="row">
              {art.map(art => (
                <div className="col-md-4">
                <Card>
                <CardContent>
                <Typography variant="h4">
                {art.title}
                </Typography>
                </CardContent>
                </Card>
                </div>
              ))}
              </div>
                <Button
                  variant="contained"
                  href="/addart"
                  color="secondary"
                  style={{
                    borderRadius: 100,
                    height: 80,
                    width: 80,
                    float: "right",
                    marginTop: 50,
                    marginRight: 150,
                  }}
                >
                  Add
                </Button>
              </div>
            </div>
          </div>
        );
      } else {
        return (
          <div className="container">
            <div className="row">
              <div className="col-md-12">there is no art start adding one</div>
            </div>
          </div>
        );
      }
    }
  }
}

function mapStatetoProps(state) {
  return {
    art: state.art,
  };
}

export default connect(mapStatetoProps, { onFetchingArt })(withRouter(Art));
