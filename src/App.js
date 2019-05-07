import React, { Component } from "react";
import HomePage from "./components/HomePage/HomePage";

import { ToastContainer } from "react-toastify";

import { string, func, bool, number } from "prop-types";

import { Route, Switch, withRouter, Link } from "react-router-dom";

import { connect } from "react-redux";
import * as appActions from "./modules/app/app.actions";
import "react-toastify/dist/ReactToastify.css";

import classes from "./App.less";

class App extends Component {
  static propTypes = {
    successBox: bool,
    changebox: func,
    corPage: func,
    addname: func,
    page: number,
    name: string,
    surname: string
  };

  componentDidMount() {}
  success = () => {
    this.props.changebox();
  };
  addNumberPage = () => {
    this.props.corPage(1);
  };
  delNumberPage = () => {
    this.props.corPage(-1);
  };
  corname = (event) => {
    this.props.addname(event.target.value);
  };
  corsurname = (event) => {
    this.props.addsurname(event.target.value);
  };
  render() {
    const prop = this.props;

    return (
      <div className={classes.app}>
        {prop.page === 1 ? (
          <div>
            <input
              type="checkbox"
              onChange={this.success}
              checked={prop.success}
            />
            <h1>{prop.success ? "Согласен" : "Не согласен"}</h1>
          </div>
        ) : prop.page === 2 ? (
          <>
            <input type="text" onChange={this.corname} value={prop.name} />
            <input
              type="text"
              onChange={this.corsurname}
              value={prop.surname}
            />
          </>
        ) : (
          <h2>Enjoy</h2>
        )}
        <div className={classes.forButton}>
          <div>
            <button onClick={this.delNumberPage} disabled={prop.page === 1}>
              Назад
            </button>
            <button
              onClick={this.addNumberPage}
              disabled={
                (prop.page === 2 &&
                  (prop.name === "" ||
                    prop.surname === "" ||
                    prop.success === false)) ||
                prop.page === 3
              }
            >
              Вперед
            </button>
          </div>
          <div>
            <h1>Страница {prop.page}</h1>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ app }) {
  return {
    success: app.lic,
    page: app.page,
    name: app.name,
    surname: app.surname
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    { ...appActions }
  )(App)
);
