import ToDoItem from "./ToDoItem";

function ToDoList() {
  return (
    <div className=" mt-5 flex flex-col gap-3">
      <ToDoItem />
      <ToDoItem />
      <ToDoItem />
      <ToDoItem />
    </div>
  );
}

export default ToDoList;
