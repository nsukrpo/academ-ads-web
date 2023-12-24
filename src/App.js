import { Routes, Route } from "react-router-dom";
import Moderation  from "./screens/ModerationScreen";
import Strikes from "./screens/StrikesScreen";
import Blockings from "./screens/BlockingsScreen";
import ResolvedAds from "./screens/ResolvedAdsScreen";
import AdvertisementScreen from "./screens/AdvertisementScreen";
import UserListScreen from "./screens/UserListScreen";
import {AuthScreen} from "./screens/AuthScreen";
import { UserProfileScreen } from "./screens/UserProfileScreen";
export default App;

function App() {
  return (
    <div className="App">
      <div className="container">
        <Routes>
          <Route path="/" element={<AuthScreen/>}></Route>
          <Route path="/moderation" element={<Moderation/>} />
          <Route path="/users" element={<UserListScreen />}></Route>
          <Route path="/users/:id" element={<UserProfileScreen />}></Route>
          <Route path="/resolved-ads" element={<ResolvedAds />}></Route>
          <Route path="/strikes" element={<Strikes />}></Route>
          <Route path="/blockings" element={<Blockings />}></Route>
          <Route path="/advertisement/:id" element={<AdvertisementScreen />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>

      </div>
    </div>
  );
}

export const NotFound = () => {
  return <div>This is a 404 page</div>
}