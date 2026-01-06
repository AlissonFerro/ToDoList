import { Card, Page } from "../styles";
import RenderList from "../../Components/RenderList";
import Menu from "../../Components/Menu";

export default function HistoryPage(){
    return(
        <Page>
            <Card>
                <Menu />
                <RenderList />
            </Card>
        </Page>
    )
}