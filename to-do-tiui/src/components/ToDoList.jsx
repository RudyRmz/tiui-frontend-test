import ToDoItem from "./ToDoItem";

function ToDoList({ tasks, onEditTask, editingTask }) {
  // Recibe tasks como prop
  return (
    <div className="mt-5 flex flex-col gap-3">
      {tasks.map((task) => (
        <ToDoItem
          key={task.id}
          task={task}
          onEditTask={onEditTask} // Pasa onEditTask a ToDoItem
          isEditing={task.id === editingTask?.id}
        />
      ))}
    </div>
  );
}

export default ToDoList;
