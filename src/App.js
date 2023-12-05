import { Routes, Route } from "react-router-dom";
import Moderation  from "./screens/ModerationScreen";
import Strikes from "./screens/StrikesScreen";
import Blockings from "./screens/BlockingsScreen";
import ResolvedAds from "./screens/ResolvedAdsScreen";
import AdvertisementScreen from "./screens/AdvertisementScreen";
export default App;

function App() {
  return (
    <div className="App">
      <div className="container">
        <Routes>
          <Route path="/auth" element={<Auth />}></Route>
          <Route path="/moderation" element={<Moderation />} ></Route>
          <Route path="/users" element={<Users />}></Route>
          <Route path="/resolved-ads" element={<ResolvedAds />}></Route>
          <Route path="/strikes" element={<Strikes />}></Route>
          <Route path="/blockings" element={<Blockings />}></Route>
          <Route path="/advertisement/id" element={<AdvertisementScreen />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>

      </div>
    </div>
  );
}

export const Auth = () => {
  
}


export const Users = () => {

}

export const NotFound = () => {
  return <div>This is a 404 page</div>
}