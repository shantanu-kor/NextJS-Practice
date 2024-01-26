import { useRef } from "react";

function TodoForm(props) {
    const todoRef = useRef();

    function submitHandler(event) {
        event.preventDefault();
        props.onSubmitForm(todoRef.current.value);
        todoRef.current.value = '';
    };

    return (
        <form style={{ textAlign: "center", color: "white", backgroundColor: "black", padding: "20px" }} onSubmit={submitHandler}>
            <label htmlFor="todo" style={{fontSize: "large", fontWeight: "550"}}>Todo: </label>
            <input id="todo" type="text" style={{padding: "5px", fontSize: "large", fontWeight: "bold"}} ref={todoRef} /> <br />
            <button type="submit" style={{margin: "10px", padding: "10px", backgroundColor: "green", border: "none", color: "white", fontSize: "large"}}>Add Todo</button>
        </form>
    )
};

export default TodoForm;