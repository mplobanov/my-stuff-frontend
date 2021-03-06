import React, {useState} from "react";
import {Page} from "../../components/ui/Page/Page";
import {Header} from "../../components/ui/Header/Header";
import {useItemsRaw} from "../../hooks/useItems";
import {Grid} from "../../components/utils/Grid/Grid";
import {ItemCard} from "../../components/ui/ItemCard/ItemCard";
import {Loading} from "../../components/ui/Loading/Loading";
import {pickColor} from "../../utils/pickColor";
import {Error} from "../../components/utils/Error/Error";
import {Items_currentUser_stuffGroups_edges} from "../../graphql/queries/__generated__/Items";
import {useNavigate, useParams} from "react-router-dom";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Cog} from "../../components/ui/Cog/Cog";
import {ChipGroup} from "../../components/ui/ChipGroup/ChipGroup";
import {useStatusSuggestions} from "../../hooks/useStatuses";
import styles from './ItemList.module.css';
import {useLocationSuggestions} from "../../hooks/useLocations";
import {Support} from "../../components/ui/Support/Support";

export interface ItemListProps {
}

export const ItemList: React.FC<ItemListProps> = () => {
    const groupID = useParams().groupID;

    const {data: items, loading, error} = useItemsRaw();

    const group: Items_currentUser_stuffGroups_edges | null = items?.currentUser?.stuffGroups.edges.find(group => group?.node?.id === groupID) ?? null;

    const notFoundError = (group || loading) ? '' : 'Group not found';

    const navigate = useNavigate();

    const [selectedStatuses, setSelectedStatuses] = useState<string>("");
    const statusSuggestions = useStatusSuggestions();

    const [selectedLocations, setSelectedLocations] = useState<string>("");
    const locationSuggestoins = useLocationSuggestions();

    return <Page>
        <Header headerText={group?.node?.name ?? 'N/A'} sideAction={<Cog onClick={() => {navigate('/settings')}}/>}/>

        {/* filters */}
        <div className={styles.filter_section}>
            <div className={styles.filter}>
                <span>??????????????</span>
                <ChipGroup
                    values={statusSuggestions ?? []}
                    onClick={(newId) => setSelectedStatuses(oldId => oldId === newId ? "" : newId)}
                    onAdd={() => navigate("/edit/status/new")}
                    selectedId={selectedStatuses}
                />
            </div>
            <div className={styles.filter}>
                <span>??????????????</span>
                <ChipGroup
                    values={locationSuggestoins ?? []}
                    onClick={(newId) => setSelectedLocations(oldId => oldId === newId ? "" : newId)}
                    onAdd={() => navigate("/edit/location/new")}
                    selectedId={selectedLocations}
                />
            </div>
        </div>
        <Loading values={[loading]} />

        <Error errors={[error?.message, notFoundError]} />

        <Grid>
        {group &&
            group.node?.items.edges
                .filter(item => !selectedStatuses || item?.node?.status.id === selectedStatuses)
                .filter(item => !selectedLocations || item?.node?.location.id === selectedLocations)
                .map(item =>
                    <ItemCard
                        status={item?.node?.status.name ?? ''}
                        name={item?.node?.name ?? 'N/A'}
                        onClick={() => navigate(`/item/${item?.node?.id}`)}
                        backgroundColor={pickColor(item?.node?.status.name ?? '')}
                        key={item?.node?.id ?? ''}
                    />
            )
        }
        <ItemCard quantity={<FontAwesomeIcon icon={faPlus} color={"rgba(0, 0, 0, 0.4)"}/>} status={''} name={'????????????????'} onClick={() => navigate('/item/new')} />
        </Grid>

        <Support />

    </Page>;
}