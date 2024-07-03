import { useState } from "react";
import PageTitle from "./components/PageTitle";
import AppHeader from "./components/AppHeader";
import ToDoList from "./components/ToDoList";
import { Snackbar } from "@mui/material";

function App() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [filter, setFilter] = useState("todas");
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleAddTask = (newTaskDescription) => {
    if (newTaskDescription.trim().length < 5) {
      setSnackbarOpen(true);
      return;
    }
    setTasks([
      ...tasks,
      {
        id: tasks.length + 1,
        description: newTaskDescription,
        completed: false,
      },
    ]);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  const handleEditTask = (taskId, newDescription) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, description: newDescription } : task
      )
    );
    setEditingTask(null);
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
    return true;
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
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={6000} // Cierra automáticamente después de 3 segundos
          onClose={handleCloseSnackbar}
          message="La tarea debe tener al menos 5 caracteres"
        />
        <AppHeader
          onAddTask={handleAddTask}
          onFilterChange={handleFilterChange}
          setSnackbarOpen={setSnackbarOpen}
        />
        <ToDoList
          tasks={filteredTasks}
          onEditTask={handleEditTask}
          editingTask={editingTask}
          onDeleteTask={handleDeleteTask}
          onToggleTask={handleToggleTask}
        />
      </div>
    </>
  );
}

export default App;
