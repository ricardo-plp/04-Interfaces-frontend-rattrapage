// src/App.js
import React from "react";
import Header from "./components/Header";
import LeaveList from "./components/LeaveList";
import LeaveCounter from "./components/LeaveCounter";
import LeaveForm from "./components/LeaveForm";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="p-6">
        <LeaveCounter />
        <LeaveList />
        <LeaveForm />
      </main>
    </div>
  );
}

export default App;
