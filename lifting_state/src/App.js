import "./App.css";

import React, { useState } from "react";

import Form from "./components/Form";
import Home from "./components/Home";
import Nav from "./components/Nav";

function App() {
  // STATE
  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState("Amit");
  const [password, setPassword] = useState("");

  return (
    <div className="App">
      <Nav />
      {!loggedIn ? (
        <Form userName={userName} setUserName={setUserName} />
      ) : (
        <Home />
      )}
    </div>
  );
}

export default App;
