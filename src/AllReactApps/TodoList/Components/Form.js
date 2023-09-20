import React, {useEffect} from "react";
import {v4} from 'uuid';

export default function Form({input, setInput, todos, setTodos, editTodo, setEditTodo}){
    const updateTodo = (title, id, completed) => {
        const newTodo = todos.map((todo) =>  
            todo.title === title ? {title, id, completed} : todo
        );
        
        setTodos(newTodo);
        setEditTodo("");
    };
    useEffect(() => {
        if(editTodo){
            setInput(editTodo.title)
        }
        else
        {
            setInput("");
        }
    }, [setInput, editTodo]);
    const onInputChange = (event) => {
        setInput(event.target.value);
   };
   const onFormSubmit = (event) => {
        event.preventDefault();
        if(!editTodo){
            setTodos([...todos, {id : v4, title : input, completed : false}]);
            setInput("");
        }
        else{
            updateTodo(input, editTodo.id, editTodo.completed)
        }
        
   }
    return(
        <form onSubmit={onFormSubmit}>
            <input 
                type="text"
                placeholder="Enter a Todo..."
                className="text-input"
                value={input}
                required
                onChange={onInputChange}
            />
            <button className="button-add" type="submit">
                Add
            </button>
        </form>
    )
}