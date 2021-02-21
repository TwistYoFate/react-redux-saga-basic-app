import { call, put } from "redux-saga/effects";
import { atypes } from "../../actiontypes";
import users from "../Requests/users";

export default function* userHandler() {
  try {
    const response = yield call(users);
    const { data } = response;
    console.log(data);
    yield put({ type: atypes.SET_USERS_STORE, data });
  } catch (e) {
    console.log(e);
  }
}
