import { userAuth } from "./../components/core/UserAuth";
import { Action } from "./Actions";
export const executeCore = (action: Action) => {
  if (action.type === "UPDATE_USER") {
    userAuth.login(action);
  }
};
