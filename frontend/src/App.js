import React from "react";
import "./App.css";
import Chat from "./Chat";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div class="app">
      <div class="app_body">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
