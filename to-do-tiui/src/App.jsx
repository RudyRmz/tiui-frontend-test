import { useState } from "react";
import PageTitle from "./components/PageTitle";
import AppHeader from "./components/AppHeader";
import ToDoList from "./components/ToDoList";

function App() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (newTaskDescription) => {
    setTasks([
      ...tasks,
      {
        id: tasks.length + 1,
        description: newTaskDescription,
        completed: false,
      },
    ]);
  };
  return (
    <>
      <PageTitle>Todo Tiui</PageTitle>
      <div className=" max-w-3xl w-full m-auto">
        <AppHeader onAddTask={handleAddTask} />
        <ToDoList tasks={tasks} />
      </div>
    </>
  );
}

export default App;
