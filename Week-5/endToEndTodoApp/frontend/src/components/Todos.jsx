export function Todos({todos}){
    return(
        <ul>
            {todos.map((todo,index) => {
                return (
                    <li key={index + todo.title}>
                        <h2>{todo.title}</h2>
                        <h3>{todo.description}</h3>
                        <button>{todo.completed ? "Completed" : "Marke as Completed"}</button>
                    </li>
                )
            })}
        </ul>
    )
}