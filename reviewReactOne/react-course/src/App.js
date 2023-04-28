import Backdrop from "./components/Backdrop"
import Modal from "./components/Modal"
import Todo from "./components/Todo"

function App() {
    return (
        <div>
            <h1>MyTodos</h1>
            <Todo text="Master React" />
            <Todo text="Learn React Js" />
            <Todo text="Great React Course" />
            <Modal></Modal>
            <Backdrop></Backdrop>
        </div>
    )
}

export default App
