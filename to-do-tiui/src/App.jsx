import PageTitle from "./components/PageTitle";
import AppHeader from "./components/AppHeader";

function App() {
  return (
    <>
      <PageTitle>Todo Tiui</PageTitle>
      <div className=" max-w-3xl w-full m-auto ">
        <AppHeader />
      </div>
    </>
  );
}

export default App;
