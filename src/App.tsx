import TodoList from "./Components/modules/todo/TodoList";
import { TodoContext } from "./store/todo/todoContext";
import type { TodoStateType } from "./store/todo/TodoInterface";


function App() {

    const todos: TodoStateType = [
        {
            id: 1,
            title: "this is from Context",
            status: "Done"
        }
    ]

    return (
        <TodoContext value={todos}>

            <TodoList />
        </TodoContext>
    );
}

export default App;