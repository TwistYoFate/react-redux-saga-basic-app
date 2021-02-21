import { takeLatest } from "redux-saga/effects";
import { atypes } from "../../actiontypes";
import userHandler from "../Handler/userHandler";

export default function* usersWatcher() {
  yield takeLatest(atypes.FETCH_USERS_DB, userHandler);
}
