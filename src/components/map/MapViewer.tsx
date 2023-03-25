import { Button } from "@mui/material";
import { FC, useEffect, useRef } from "react";
import { Navigate } from "react-router-dom";
import { useAppContext } from "../../middleware/ContextProvider";

export const MapViewer: FC = () => {
  const [state, dispatch] = useAppContext();
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (canvas && state.user) {
      dispatch({ type: "START_MAP", payload: canvas });
    }

    return () => {
      dispatch({ type: "REMOVE_MAP" });
    };
  }, []);

  if (!state.user) {
    return <Navigate to="/login" />;
  }

  const onLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <>
      <Button onClick={onLogout}>Logout</Button>
      <div className="full-screen" ref={canvasRef}></div>
    </>
  );
};
