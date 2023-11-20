import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import UsersList from "./components/users_list/UsersList";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header/>
        <div className="row">
          <Sidebar/>
          <div className="vertical__line"/>
          <div className="column">
            <UsersList/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
