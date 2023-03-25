import { MapHandler } from "./../core/map/MapHandler";
import { userAuth } from "../core/user/UserAuth";
import { Action } from "./Actions";

export const executeCore = (action: Action) => {
  if (action.type === "LOGIN") {
    userAuth.login(action);
  }

  if (action.type === "LOGOUT") {
    userAuth.logout();
  }

  if (action.type === "START_MAP") {
    MapHandler.start(action.payload);
  }

  if (action.type === "REMOVE_MAP") {
    MapHandler.remove();
  }
};
