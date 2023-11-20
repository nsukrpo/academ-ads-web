import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import UserInfo from "./components/user_info/UserInfo";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header/>
        <div className="row">
          <Sidebar/>
          <div className="vertical__line"/>
          <div className="column">
            <UserInfo/>            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
