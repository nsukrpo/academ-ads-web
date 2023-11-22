import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import UsersList from "./components/users_list/UsersList";
import Infobar from "./components/infobar/Infobar";
import { BlockAdWindow, BlockUserWindow } from "./components/modal_window/BlockWindow";
import Advertisement from "./components/advertisement/Advertisement";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header/>
        <div className="row">
          <Sidebar/>
          <div className="vertical__line"/>
          <div className="column">
            <Infobar/>
            <Advertisement/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
