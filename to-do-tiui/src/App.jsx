import { useState } from "react";
import PageTitle from "./components/PageTitle";
import AppHeader from "./components/AppHeader";
import ToDoList from "./components/ToDoList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

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

  const handleEditTask = (taskId, newDescription) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, description: newDescription } : task
      )
    );
    setEditingTask(null); // Cierra el diálogo de edición
  };

  return (
    <>
      <PageTitle>Todo Tiui</PageTitle>
      <div className=" max-w-3xl w-full m-auto">
        <AppHeader onAddTask={handleAddTask} />
        <ToDoList
          tasks={tasks}
          onEditTask={handleEditTask}
          editingTask={editingTask}
        />
      </div>
    </>
  );
}

export default App;
