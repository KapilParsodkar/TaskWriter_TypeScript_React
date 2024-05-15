import React from "react";
import AddToDo from "./Components/AddToDo";
import DisplayTodos from "./Components/DisplayTodos";
import Navbar from "./Components/Navbar";
const App = () => {
  return (
    <main>
      <h1>TaskWriter</h1>
      <Navbar />
      <AddToDo />
      <DisplayTodos />
    </main>
  );
};

export default App;
