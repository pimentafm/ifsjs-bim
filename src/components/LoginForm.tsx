import { FC } from "react";
import { getApp } from "firebase/app";

export const LoginForm: FC = () => {
  return <h1>{JSON.stringify(getApp())}</h1>;
};
