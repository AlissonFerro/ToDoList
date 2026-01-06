import { useContext } from "react";
import { ToDoContext } from "../../Context/Todo";
import Item from "../Item";
import { Ul } from "../styles";

export default function RenderList(){
    const {listTodo} = useContext(ToDoContext);

    return (
        <Ul>
            {
                listTodo.map((item, i) => <Item key={i}>{item}</Item>)
            }
        </Ul>
    )
}