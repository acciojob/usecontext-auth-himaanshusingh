import React, { useState } from "react";
import "../styles/App.css";
import AuthContext from "./AuthContext";
import Auth from "./Auth";

const App = () => {
  const [check, setCheck] = useState(false);

  return (
    <AuthContext.Provider value={[check, setCheck]}>
      <Auth />
    </AuthContext.Provider>
  );
};

export default App;
