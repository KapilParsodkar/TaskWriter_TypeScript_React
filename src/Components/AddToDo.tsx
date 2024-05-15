import React, { FormEvent, useState } from "react";
import { useTodos } from "../Store/todos";

function AddToDo() {
  const [todo, setodo] = useState("");
  const { handleAddToDo } = useTodos();
  const handleformsubmit = (e: FormEvent<HTMLElement>) => {
    e.preventDefault();
    handleAddToDo(todo);
    setodo("");
  };
  return (
    <form onSubmit={handleformsubmit}>
      <input
        type="text"
        name=""
        value={todo}
        onChange={(e) => setodo(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddToDo;
