import React from 'react';
import {Route, Routes} from "react-router-dom";
import {ItemList} from "./pages/ItemList";
import {GroupList} from "./pages/GroupList";
import {ItemPage} from "./pages/ItemPage";

function App() {
  return (
      <Routes>
          <Route index element={<GroupList />} />
          <Route path={"/group/:groupID"} element={<ItemList />}/>
          <Route path={"/item/:itemID"} element={<ItemPage />}/>
      </Routes>
  );
}

export default App;
