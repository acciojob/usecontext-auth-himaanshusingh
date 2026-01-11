import React, { useContext } from "react";
import AuthContext from "./AuthContext";

const Auth = () => {
  const [check, setCheck] = useContext(AuthContext);
  const checkText = "You are now authenticated, you can proceed";
  const unCheckText = "You are not authenticated";

  return (
    <div>
      <h1>Click on the checkbox to get authenticated</h1>
      <p className="authText">{check ? checkText : unCheckText}</p>
      <input type="checkbox" onClick={() => setCheck(!check)} />
      <span>I am not a robot</span>
    </div>
  );
};

export default Auth;
