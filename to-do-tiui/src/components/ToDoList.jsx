import ToDoItem from "./ToDoItem";

function ToDoList({ tasks }) {
  // Recibe tasks como prop
  return (
    <div className="mt-5 flex flex-col gap-3">
      {tasks.map((task) => (
        <ToDoItem key={task.id} task={task} />
      ))}
    </div>
  );
}

export default ToDoList;
