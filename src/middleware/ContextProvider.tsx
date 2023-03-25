import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  useContext,
  useReducer,
} from "react";
import { Action } from "./Actions";
import { Authenticator } from "./Authenticator";
import { executeCore } from "./CoreHandler";
import { initialState, State } from "./State";
import { reducer } from "./StateHandler";

const appContext = createContext<[State, Dispatch<Action>]>([
  initialState,
  () => {},
]);

export const ContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, setState] = useReducer(reducer, initialState);

  const dispatch = (value: Action) => {
    setState(value);
    executeCore(value);
  };

  return (
    <appContext.Provider value={[state, dispatch]}>
      <Authenticator />
      {children}
    </appContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(appContext);
};
