import TodoForm from "../components/TodoForm";

function HomePage() {
    function submitHandler() {};

    return <TodoForm submitForm={submitHandler}/>
};

export default HomePage;