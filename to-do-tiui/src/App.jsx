import { useState } from "react";
import PageTitle from "./components/PageTitle";
import AppHeader from "./components/AppHeader";
import ToDoList from "./components/ToDoList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [filter, setFilter] = useState("todas"); // Nuevo estado para el filtro

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

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completadas") return task.completed;
    if (filter === "pendientes") return !task.completed;
    return true; // Mostrar todas si el filtro es "todas"
  });

  const handleToggleTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <>
      <PageTitle>Todo Tiui</PageTitle>
      <div className=" max-w-3xl w-full m-auto">
        <AppHeader
          onAddTask={handleAddTask}
          onFilterChange={handleFilterChange}
        />
        <ToDoList
          tasks={filteredTasks}
          onEditTask={handleEditTask}
          editingTask={editingTask}
          onDeleteTask={handleDeleteTask}
          onToggleTask={handleToggleTask} // Pasa la función para cambiar el estado
        />
      </div>
    </>
  );
}

export default App;
