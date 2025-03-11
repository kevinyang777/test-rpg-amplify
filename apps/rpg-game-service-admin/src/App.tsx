import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { StatusList } from "./status/StatusList";
import { StatusCreate } from "./status/StatusCreate";
import { StatusEdit } from "./status/StatusEdit";
import { StatusShow } from "./status/StatusShow";
import { CharacterList } from "./character/CharacterList";
import { CharacterCreate } from "./character/CharacterCreate";
import { CharacterEdit } from "./character/CharacterEdit";
import { CharacterShow } from "./character/CharacterShow";
import { MonsterList } from "./monster/MonsterList";
import { MonsterCreate } from "./monster/MonsterCreate";
import { MonsterEdit } from "./monster/MonsterEdit";
import { MonsterShow } from "./monster/MonsterShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { FieldModelList } from "./fieldModel/FieldModelList";
import { FieldModelCreate } from "./fieldModel/FieldModelCreate";
import { FieldModelEdit } from "./fieldModel/FieldModelEdit";
import { FieldModelShow } from "./fieldModel/FieldModelShow";
import { NpcList } from "./npc/NpcList";
import { NpcCreate } from "./npc/NpcCreate";
import { NpcEdit } from "./npc/NpcEdit";
import { NpcShow } from "./npc/NpcShow";
import { InventoryList } from "./inventory/InventoryList";
import { InventoryCreate } from "./inventory/InventoryCreate";
import { InventoryEdit } from "./inventory/InventoryEdit";
import { InventoryShow } from "./inventory/InventoryShow";
import { ItemList } from "./item/ItemList";
import { ItemCreate } from "./item/ItemCreate";
import { ItemEdit } from "./item/ItemEdit";
import { ItemShow } from "./item/ItemShow";
import { httpAuthProvider } from "./auth-provider/ra-auth-http";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"RPG Game Service"}
        dataProvider={dataProvider}
        authProvider={httpAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Status"
          list={StatusList}
          edit={StatusEdit}
          create={StatusCreate}
          show={StatusShow}
        />
        <Resource
          name="Character"
          list={CharacterList}
          edit={CharacterEdit}
          create={CharacterCreate}
          show={CharacterShow}
        />
        <Resource
          name="Monster"
          list={MonsterList}
          edit={MonsterEdit}
          create={MonsterCreate}
          show={MonsterShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="FieldModel"
          list={FieldModelList}
          edit={FieldModelEdit}
          create={FieldModelCreate}
          show={FieldModelShow}
        />
        <Resource
          name="Npc"
          list={NpcList}
          edit={NpcEdit}
          create={NpcCreate}
          show={NpcShow}
        />
        <Resource
          name="Inventory"
          list={InventoryList}
          edit={InventoryEdit}
          create={InventoryCreate}
          show={InventoryShow}
        />
        <Resource
          name="Item"
          list={ItemList}
          edit={ItemEdit}
          create={ItemCreate}
          show={ItemShow}
        />
      </Admin>
    </div>
  );
};

export default App;
