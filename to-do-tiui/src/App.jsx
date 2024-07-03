import PageTitle from "./components/PageTitle";
import AppHeader from "./components/AppHeader";
import ToDoItem from "./components/ToDoItem";

function App() {
  return (
    <>
      <PageTitle>Todo Tiui</PageTitle>
      <div className=" max-w-3xl w-full m-auto border border-red-700">
        <AppHeader />
        <ToDoItem />
      </div>
    </>
  );
}

export default App;
