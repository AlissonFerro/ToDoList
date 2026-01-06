import { Li } from "../styles";

export default function Item({ children }){

    return(
        <Li>{children.todo} / {children.dateFinish}</Li>
    )
}