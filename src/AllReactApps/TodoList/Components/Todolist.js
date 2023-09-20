import React from "react";

export default function Todolist({todos, setTodos, setEditTodo}){
    const handdleComplete = ((todo) => {
        setTodos(
            todos.map((item) => {
                if(item.title === todo.title)
                    return{...item, completed : !item.completed}
                return item;
            }
        ))
    });
    const handleEdit = ({title}) => {
        const findTodo = todos.find(todo => todo.title === title);
        setEditTodo(findTodo);
    }
    const handdleDelete = ({title}) => {
            setTodos(todos.filter((todo) => todo.title !== title))
    };
    console.log(todos);
    return(
        <div>
            {todos.map((todo) => (
                <li className="list-item" key = {todos.id}>
                    <input 
                        type="text"
                        value={todo.title}
                        className="list"
                        onChange={(event) => event.preventDefault()}
                    />
                    <div>
                        <button 
                            className="button-complete task-button"
                            onClick={() => handdleComplete(todo)}
                        >
                            <li className="fas fa-check-circle" />
                        </button>
                        <button className="button-edit task-button" onClick={() => handleEdit(todo)}>
                            <li className="fas fa-check-edit" />
                        </button>
                        <button 
                            className="button-delete task-button"
                            onClick={() => handdleDelete(todo)}
                        >
                            <li className="fas fa-check-trash" />
                        </button>
                    </div>
                </li>
            ))}
        </div>
    )
}