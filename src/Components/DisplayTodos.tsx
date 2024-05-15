import React from "react";
import { useTodos } from "../Store/todos";
import { useSearchParams } from "react-router-dom";
const DisplayTodos = () => {
  const { todos, togglecomplete, handleDelete } = useTodos();
  const [searchParams] = useSearchParams();
  let td = searchParams.get("todos");
  let filterData = todos;
  if (td === "active") {
    filterData = filterData.filter((t) => !t.completed);
  }
  if (td === "completed") {
    filterData = filterData.filter((t) => t.completed);
  }
  return (
    <ul>
      {filterData.map((t) => {
        return (
          <li key={t.id}>
            <input
              type="checkbox"
              name=""
              id={`todo-${t.id}`}
              checked={t.completed}
              onChange={() => togglecomplete(t.id)}
            />
            <label htmlFor={`todo-${t.id}`}>{t.task}</label>
            {t.completed && (
              <button type="button" onClick={() => handleDelete(t.id)}>
                Delete
              </button>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default DisplayTodos;
