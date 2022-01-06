import React from "react";
import {Page} from "../components/Page/Page";
import {Header} from "../components/Header/Header";
import {useItemsRaw} from "../hooks/useItems";
import {Grid} from "../components/Grid/Grid";
import {ItemCard} from "../components/ItemCard/ItemCard";
import {Loading} from "../components/Loading/Loading";
import {pickColor} from "../utils/pickColor";
import {Error} from "../components/Error/Error";
import {useNavigate} from "react-router-dom";
import {Cog} from "../components/Cog/Cog";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Support} from "../components/Support/Support";


export const GroupList: React.FC = () => {
    const {data: items, loading, error} = useItemsRaw({
        pollInterval: 3000,
    });
    const navigate = useNavigate();


    const groups = items?.currentUser?.stuffGroups.edges.map(group => group?.node);

    return <Page>
        <Header headerText={'Мои вещи'} sideAction={<Cog onClick={() => {navigate('/settings')}}/>}/>

        {/* filters */}

        <Loading values={[loading]} />

        <Error errors={[error?.message]} />

        {groups &&
            <Grid>
                {groups?.map(group =>
                    <ItemCard
                        quantity={group?.items.edges.length ?? <></>}
                        status={''}
                        name={group?.name ?? 'N/A'}
                        onClick={() => navigate(`/group/${group?.id}`)}
                        backgroundColor={pickColor(group?.name ?? '')}
                        key={group?.id ?? ''}
                    />
                )}
                <ItemCard quantity={<FontAwesomeIcon icon={faPlus} color={"rgba(0, 0, 0, 0.4)"}/>} status={""} name={"Добавить группу"} onClick={() => navigate("/edit/group/new")} />
            </Grid>
        }
        <Support />

    </Page>;
}