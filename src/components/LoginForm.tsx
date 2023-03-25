import { FC } from "react";
import { getApp } from "firebase/app";
import { useAppContext } from "../middleware/ContextProvider";

export const LoginForm: FC = () => {
  const [state] = useAppContext();

  const onLogin = () => {
    console.log("Longin");
  };

  return (
    <h1>
      {state.user ? (
        <p>{state.user.displayName}</p>
      ) : (
        <button onClick={onLogin}>Login</button>
      )}
    </h1>
  );
};
