import { combineReducers, applyMiddleware } from "redux";
import { createStore } from "redux";
import { atypes } from "./actiontypes";
import createSagaMiddleware from "redux-saga";
import usersWatcher from "./saga/Watcher/usersWatcher";

// ----------------------------------------

const initialState = {
  counter: 0,
  users: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "INC":
      return {
        ...state,
        counter: state.counter + 1
      };
    case atypes.SET_USERS_STORE:
      return {
        ...state,
        users: action.data
      };
    default:
      return state;
  }
}

//-----------------------------------------

const sagaMiddleware = createSagaMiddleware();

const rootreducer = combineReducers({ reducer });
const store = createStore(rootreducer, {}, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(usersWatcher);

console.log(store);

export default store;
