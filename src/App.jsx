import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import UserInput from "./components/UserInput.jsx";

function App() {
  return (
    <div>
      <Header />
      <UserInput />
    </div>
  );
}

export default App;
