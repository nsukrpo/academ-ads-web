import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Infobar from "./components/infobar/Infobar";
import AuthScreen from "./components/auth_screen/AuthScreen";


function App() {
  return (
    <div className="App">
      <Header/>
      <div className="container row">
        <Sidebar/>
        <div className="vertical__line"/>
        <Infobar/>
      </div>
    </div>
  );
}

export default App;
