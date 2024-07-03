import PageTitle from "./components/PageTitle";
import AppHeader from "./components/AppHeader";
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <>
      <PageTitle>Todo Tiui</PageTitle>
      <div className=" max-w-3xl w-full m-auto border border-red-700">
        <AppHeader />
        <ToDoList />
      </div>
    </>
  );
}

export default App;
