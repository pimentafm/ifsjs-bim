import { userAuth } from "./../components/core/UserAuth";
import { Action } from "./Actions";

export const executeCore = (action: Action) => {
  if (action.type === "LOGIN") {
    userAuth.login(action);
  }

  if (action.type === "LOGOUT") {
    userAuth.logout();
  }
};
