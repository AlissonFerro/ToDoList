import { useState } from "react";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import Label from "../../Components/Label";
import { TextArea } from "../../Components/styles";
import { Card, Page, Row, RowHeader, Void } from "../styles";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Menu from "../../Components/Menu";

export default function IndexPage(){
    const navigate = useNavigate();
    const [todo, setTodo] = useState('');
    const [dateFinish, setDateFinish] = useState(new Date().toISOString().split('T')[0]);
    
    return(
        <Page>
            <Card>
                <Menu />
                <Row>
                    <RowHeader>
                        <IoIosArrowBack onClick={() => navigate(-1)} />
                        <Label>Tarefa</Label>
                        <Void />
                    </RowHeader>
                    <TextArea type='' placeholder='Digite sua tarefa' value={todo} onChange={e => setTodo(e.target.value)}/>
                </Row>
                <Row>
                    <Label>Data de término</Label>
                    <Input type='date' value={dateFinish} setDateFinish={setDateFinish} />
                </Row>
                <Row>
                    <Button dateFinish={dateFinish} todo={todo} setTodo={setTodo} setDateFinish={setDateFinish}>Salvar</Button>
                </Row>
            </Card>
        </Page>
    )
}