function TodoForm(props) {
    return (
        <form style={{ textAlign: "center", color: "white", backgroundColor: "black", padding: "20px" }} onSubmit={props.submitForm}>
            <label htmlFor="todo" style={{fontSize: "large"}}>Todo: </label>
            <input id="todo" type="text" style={{padding: "5px"}} /> <br />
            <button type="submit" style={{margin: "10px", padding: "10px", backgroundColor: "green", border: "none", color: "white", fontSize: "large"}}>Add Todo</button>
        </form>
    )
};

export default TodoForm;