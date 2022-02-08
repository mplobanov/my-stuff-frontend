import React from "react";
import {Page} from "../components/ui/Page/Page";
import {Header} from "../components/ui/Header/Header";
import {useItemsRaw} from "../hooks/useItems";
import {Grid} from "../components/utils/Grid/Grid";
import {ItemCard} from "../components/ui/ItemCard/ItemCard";
import {Loading} from "../components/ui/Loading/Loading";
import {pickColor} from "../utils/pickColor";
import {Error} from "../components/utils/Error/Error";
import {useNavigate} from "react-router-dom";
import {Cog} from "../components/ui/Cog/Cog";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Support} from "../components/ui/Support/Support";


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
                        quantity={group?.items.edges.length.toString()}
                        status={''}
                        name={group?.name.toString() ?? 'N/A'}
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