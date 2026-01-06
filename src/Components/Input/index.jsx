import { InputStyle } from "../styles";

export default function Input({value, setDateFinish, placeholder, type}){
    return(
        <InputStyle type={type} value={value} onChange={e => setDateFinish(e.target.value)} placeholder={placeholder} />
    )
}