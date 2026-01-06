import { Outlet, useNavigate } from "react-router-dom";
import { Li, Ul } from "../styles";

export default function Menu(){
    const navigate = useNavigate();

    return(
        <>
            <Ul>
                <Li onClick={() => navigate('/')}>Home</Li>
                <Li onClick={() => navigate('/history')}>Historico</Li>
            </Ul>
            <Outlet />
        </>
    )
}