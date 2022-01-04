import React from "react";
import {Page} from "../components/Page/Page";
import {Header} from "../components/Header/Header";
import {useItems} from "../hooks/useItems";
import {Grid} from "../components/Grid/Grid";
import {ItemCard} from "../components/ItemCard/ItemCard";
import {Loading} from "../components/Loading/Loading";
import {pickColor} from "../utils/pickColor";
import {Error} from "../components/Error/Error";
import {useNavigate} from "react-router-dom";

export const GroupList: React.FC = () => {
    const {data: items, loading, error} = useItems();
    const navigate = useNavigate();


    const groups = items?.currentUser?.stuffGroups.edges.map(group => group?.node);

    return <Page>
        <Header headerText={'Мои вещи'} description={'Dff'} />

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
            </Grid>
        }

    </Page>;
}