import DoneTodoList from "./Components/DoneTodoList/DoneTodoList";
import InputComponent from "./Components/InputComponent/InputComponent";
import TodoList from "./Components/Todolist/TodoList";

function App() {
  return (
    <div>
    <header className="bg-[#071952] text-white text-2xl flex justify-center items-center h-12">
       TO DO APP REDUX TOOLKIT
    </header>
    < InputComponent/>
    <div className="flex gap-10 justify-center mt-10">
    <TodoList/>
    <DoneTodoList/>
    </div>
    </div>
  );
}

export default App;
