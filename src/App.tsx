import React, {useEffect, useState} from 'react';
import {Route, Routes} from "react-router-dom";
import {ItemList} from "./pages/ItemList/ItemList";
import {GroupList} from "./pages/GroupList";
import {ItemPage} from "./pages/ItemPage/ItemPage";
import {LoginPage} from "./pages/LoginPage/LoginPage";
import {NotFoundPage} from "./pages/NotFoundPage";
import {RegisterPage} from "./pages/RegisterPage/RegisterPage";
import {SettingsPage} from "./pages/SettingsPage/SettingsPage";
import {useUser} from "./hooks/useUser";
import {FEEditPage} from "./pages/FEEditPage/FEEditPage";
import {useStatusFEMutate, useStatusSuggestions} from "./hooks/useStatuses";
import {FEListPage} from "./pages/FEListPage/FEListPage";
import {useLocationFEMutate, useLocationSuggestions} from "./hooks/useLocations";
import {useGroupFEMutate, useGroupSuggestions} from "./hooks/useGroups";

function App() {
    const [logged, setLogged] = useState(!!localStorage.getItem('token'));

    const {data, loading} = useUser();

    useEffect(() => {
        if (!loading) {
            setLogged(!!data?.currentUser?.id);
        }
    }, [data, loading]);

    if (logged) {
        return (
            <Routes>
                <Route index element={<GroupList />} />
                <Route path={'/login'} element={<LoginPage />} />
                <Route path={"/group/:groupID"} element={<ItemList />}/>
                <Route path={"/item/new"} element={<ItemPage />}/>
                <Route path={"/item/:itemID"} element={<ItemPage />}/>
                <Route path={"/settings"} element={<SettingsPage />}/>
                
                <Route path={"/edit/status/new"} element={<FEEditPage useFESuggestions={useStatusSuggestions} useFEMutate={useStatusFEMutate} entityName={"статус"} create />} />
                <Route path={"/edit/status/:entityID"} element={<FEEditPage useFESuggestions={useStatusSuggestions} useFEMutate={useStatusFEMutate} entityName={"статус"} />} />
                <Route path={"/list/status"} element={<FEListPage useFESuggestions={useStatusSuggestions} entityName={"Статусы"} entityNameEng={"status"} />} />

                <Route path={"/edit/location/new"} element={<FEEditPage useFESuggestions={useLocationSuggestions} useFEMutate={useLocationFEMutate} entityName={"локацию"} create />} />
                <Route path={"/edit/location/:entityID"} element={<FEEditPage useFESuggestions={useLocationSuggestions} useFEMutate={useLocationFEMutate} entityName={"локацию"} />} />
                <Route path={"/list/location"} element={<FEListPage useFESuggestions={useLocationSuggestions} entityName={"Локации"} entityNameEng={"location"} />} />

                <Route path={"/edit/group/new"} element={<FEEditPage useFESuggestions={useGroupSuggestions} useFEMutate={useGroupFEMutate} entityName={"группу"} create />} />
                <Route path={"/edit/group/:entityID"} element={<FEEditPage useFESuggestions={useGroupSuggestions} useFEMutate={useGroupFEMutate} entityName={"группу"} />} />
                <Route path={"/list/group"} element={<FEListPage useFESuggestions={useGroupSuggestions} entityName={"Группы"} entityNameEng={"group"} />} />

                <Route path={"*"} element={<NotFoundPage />} />
            </Routes>
        );
    } else {
        return (
            <Routes>
                <Route index element={<LoginPage />}/>
                <Route path={'/login'} element={<LoginPage />} />
                <Route path={'/register'} element={<RegisterPage />} />
                <Route path={"*"} element={<NotFoundPage />} />
            </Routes>
        )
    }


}

export default App;
