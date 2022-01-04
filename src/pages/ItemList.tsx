import React from "react";
import {Page} from "../components/Page/Page";
import {Header} from "../components/Header/Header";
import {useItems} from "../hooks/useItems";
import {Grid} from "../components/Grid/Grid";
import {ItemCard} from "../components/ItemCard/ItemCard";
import {Loading} from "../components/Loading/Loading";
import {pickColor} from "../utils/pickColor";
import {Error} from "../components/Error/Error";
import {Items_currentUser_stuffGroups_edges} from "../graphql/queries/__generated__/Items";
import {useNavigate, useParams} from "react-router-dom";

export interface ItemListProps {
}

export const ItemList: React.FC<ItemListProps> = () => {
    const groupID = useParams().groupID;

    const {data: items, loading, error} = useItems();

    const group: Items_currentUser_stuffGroups_edges | null = items?.currentUser?.stuffGroups.edges.find(group => group?.node?.id === groupID) ?? null;

    const notFoundError = (group || loading) ? '' : 'Group not found';

    const navigate = useNavigate()

    return <Page>
        <Header headerText={group?.node?.name ?? 'N/A'} description={'Dff'} />

        {/* filters */}

        <Loading values={[loading]} />

        <Error errors={[error?.message, notFoundError]} />

        {group &&
        <Grid>
            {group.node?.items.edges.map(item =>
                    <ItemCard
                        quantity={<></>}
                        status={item?.node?.status.name ?? ''}
                        name={item?.node?.name ?? 'N/A'}
                        onClick={() => navigate(`/item/${item?.node?.id}`)}
                        backgroundColor={pickColor(item?.node?.name ?? '')}
                        key={item?.node?.id ?? ''}
                    />
            )}


        </Grid>
        }

    </Page>;
}