import { useState } from "react"
import Modal from "./Modal"
import Backdrop from "./Backdrop"

function Todo(props) {
    //UseState é uma funcao que sempre vai retornar dois elementos,
    //  o Primeiro é uma variavel[um estado] e o Segundo é uma funcao.
    //  A funcao desta funcao é permitir o controle de estado de determinados
    //  componentes.

    const [modalIsOpen, setModalIsOpen] = useState(false)

    function deleteHandler() {
        setModalIsOpen(true)
    }
    function closeModalHandler() {
        setModalIsOpen(false)
    }
    return (
        <div className="card">
            <h2>{props.text}</h2>
            <div className="actions">
                <button className="btn" onClick={deleteHandler}>
                    Delete
                </button>
            </div>
            {modalIsOpen && <Modal onCancel={closeModalHandler} />}
            {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
        </div>
    )
}

export default Todo
