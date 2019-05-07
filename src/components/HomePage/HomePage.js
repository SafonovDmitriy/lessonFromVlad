import React, { Component } from "react";
import { Link } from "react-router-dom";

import classes from "./HomePage.less";
import { connect } from "react-redux";

class HomePage extends Component {
  renderPost = (post) => {
    const { id, title } = post;

    return <></>;
  };

  render() {
    const { posts } = this.props;

    return <></>;
  }
}

function mapStateToProps({ posts }) {
  return {};
}
export default connect(mapStateToProps)(HomePage);
