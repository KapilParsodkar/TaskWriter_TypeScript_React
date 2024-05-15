import { createContext, useContext, useState } from "react";

export type TodosProviderProps = {
  children: React.ReactNode;
};

export type Todo = {
  id: string;
  task: string;
  completed: boolean;
  CreatedAt: Date;
};

export type TodosContext = {
  todos: Todo[];
  handleAddToDo: (task: string) => void;
  togglecomplete: (id: string) => void;
  handleDelete: (id: string) => void;
};
export const todosContext = createContext<TodosContext | null>(null);

export const TodosProvider = ({ children }: TodosProviderProps) => {
  const [todos, setodos] = useState<Todo[]>(() => {
    try {
      const nt = localStorage.getItem("todos") || "[]";
      return JSON.parse(nt) as Todo[];
    } catch (error) {
      return [];
    }
  });

  const handleAddToDo = (task: string) => {
    setodos((p) => {
      const newtodos: Todo[] = [
        {
          id: Math.random().toString(),
          task: task,
          completed: false,
          CreatedAt: new Date(),
        },
        ...p,
      ];
      console.log(newtodos);
      localStorage.setItem("todos", JSON.stringify(newtodos));
      return newtodos;
    });
  };
  const togglecomplete = (id: string) => {
    setodos((p) => {
      const newtodos = p.map((t) => {
        if (t.id === id) {
          return { ...t, completed: !t.completed };
        }
        return t;
      });
      localStorage.setItem("todos", JSON.stringify(newtodos));
      return newtodos;
    });
  };

  const handleDelete = (id: string) => {
    setodos((p) => {
      const nt = p.filter((t) => t.id !== id);
      localStorage.setItem("todos", JSON.stringify(nt));
      return nt;
    });
  };
  return (
    <todosContext.Provider
      value={{ todos, handleAddToDo, togglecomplete, handleDelete }}
    >
      {children}
    </todosContext.Provider>
  );
};

export const useTodos = () => {
  const todoConsumer = useContext(todosContext);
  if (!todoConsumer) {
    throw new Error("useTodos used outside of provider");
  }
  return todoConsumer;
};
