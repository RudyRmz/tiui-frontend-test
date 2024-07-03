import ToDoItem from "./ToDoItem";

function ToDoList({
  tasks,
  onEditTask,
  editingTask,
  onDeleteTask,
  onToggleTask,
}) {
  return (
    <div className="mt-5 flex flex-col gap-3">
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <ToDoItem
            key={task.id}
            task={task}
            onEditTask={onEditTask}
            isEditing={task.id === editingTask?.id}
            onDeleteTask={onDeleteTask}
            onToggleTask={onToggleTask}
          />
        ))
      ) : (
        <p className="text-center text-gray-500">
          {"No hay tareas que mostrar"}
        </p>
      )}
    </div>
  );
}

export default ToDoList;
