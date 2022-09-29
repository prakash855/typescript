import React from "react";
import InputField from "./components/InputField";
import "./App.css";
import "./styles.css";

export const App: React.FC = () => {
  return (
    <div className="App">
      <div className="heading">Taskify</div>
      <InputField />
    </div>
  );
};
