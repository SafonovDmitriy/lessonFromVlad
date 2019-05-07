import { createReducer } from "redux-act";

import * as appActions from "./app.actions";

const initialState = {
  page: 2,
  lic: false,
  name: "",
  surname: ""
};

const reducer = {
  [appActions.changebox]: (state) => ({
    ...state,
    lic: !state.lic
  }),
  [appActions.corPage]: (state, cor) => ({
    ...state,
    page: state.page + cor
  }),
  [appActions.addname]: (state, name) => ({
    ...state,
    name: name
  }),
  [appActions.addsurname]: (state, surname) => ({
    ...state,
    surname: surname
  })
};

export default createReducer(reducer, initialState);
