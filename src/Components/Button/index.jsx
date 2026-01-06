import { useContext } from "react";
import { ButtonStyle } from "../styles";
import { ToDoContext } from "../../Context/Todo";

export default function Button({ todo, dateFinish, setDateFinish, setTodo, children }){
    const { addToList } = useContext(ToDoContext);
    
    function OnClick(){
        addToList({ todo, dateFinish });
        setTodo('');
        setDateFinish(new Date().toISOString().split('T')[0])
    }
    return(
        <ButtonStyle onClick={() => OnClick()}>{children}</ButtonStyle>
    )
}