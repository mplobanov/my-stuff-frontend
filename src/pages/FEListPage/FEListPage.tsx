import React from "react";
import {Suggestion} from "../../components/logic/Suggest/Suggest";
import {Page} from "../../components/ui/Page/Page";
import {Header} from "../../components/ui/Header/Header";
import {Grid} from "../../components/utils/Grid/Grid";
import {Loading} from "../../components/ui/Loading/Loading";
import {ItemCard} from "../../components/ui/ItemCard/ItemCard";
import {useNavigate} from "react-router-dom";
import {pickColor} from "../../utils/pickColor";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Cog} from "../../components/ui/Cog/Cog";

export interface FEListPageProps {
    useFESuggestions: () => (Suggestion[] | undefined),
    entityName: string,
    entityNameEng: string,
}

export const FEListPage: React.FC<FEListPageProps> = ({entityName, useFESuggestions, entityNameEng}) => {
    const suggs = useFESuggestions();

    const navigate = useNavigate();

    return (
        <Page>
            <Header headerText={entityName} sideAction={<Cog onClick={() => {navigate('/settings')}}/>} />
            <Loading values={[!suggs]} />
            <Grid>
                {suggs && suggs.map(sugg =>
                    <ItemCard
                        key={sugg.id}
                        status={""}
                        name={sugg.name}
                        onClick={() => navigate(`/edit/${entityNameEng}/${sugg.id}`)}
                        backgroundColor={pickColor(sugg.name)}
                    />)
                }
                <ItemCard
                    quantity={<FontAwesomeIcon icon={faPlus} color={"rgba(0, 0, 0, 0.4)"}/>}
                    status={""}
                    name={"Добавить"}
                    onClick={() => navigate(`/edit/${entityNameEng}/new`)} />
            </Grid>
        </Page>
    );
}