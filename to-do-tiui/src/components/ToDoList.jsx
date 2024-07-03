import ToDoItem from "./ToDoItem";

function ToDoList({
  tasks,
  onEditTask,
  editingTask,
  onDeleteTask,
  onToggleTask,
}) {
  // Recibe tasks como prop
  return (
    <div className="mt-5 flex flex-col gap-3">
      {tasks.map((task) => (
        <ToDoItem
          key={task.id}
          task={task}
          onEditTask={onEditTask} // Pasa onEditTask a ToDoItem
          isEditing={task.id === editingTask?.id}
          onDeleteTask={onDeleteTask} // Pasa onDeleteTask a ToDoItem
          onToggleTask={onToggleTask}
        />
      ))}
    </div>
  );
}

export default ToDoList;
