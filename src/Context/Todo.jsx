import React, { useState } from "react";

export const ToDoContext = React.createContext();
ToDoContext.displayName = "ToDo";

export function ToDoProvider({children}){
    const [listTodo, setListTodo] = useState([]);

    function addToList(obj){
        const arr = listTodo;
        arr.push(obj);
        setListTodo(arr);
    }

    return(
        <ToDoContext.Provider
            value={{
                listTodo, addToList,
            }}
        >
            {children}
        </ToDoContext.Provider>
    )
}