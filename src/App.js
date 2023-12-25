import { useRoutes } from "./routes/Routes";
import { Routes, Route } from "react-router-dom";
import Main from "./screens/Main";
import Moderation from "./screens/ModerationScreen";
import UserListScreen from "./screens/UserListScreen";
import UserProfileScreen from "./screens/UserProfileScreen";
import ResolvedAds from "./screens/ResolvedAdsScreen";
import Strikes from "./screens/StrikesScreen";
import Blockings from "./screens/BlockingsScreen";
import AdvertisementScreen from "./screens/AdvertisementScreen";

export default App;
function App() {
  const routes = useRoutes()

  return (
    <div className="App">
      <div className="container">
      <Routes>
        <Route path="/" element={<Main />} />
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

const NotFound = () => {
  return(
    <div className="heading__B1 platinum">Page not found</div>
                
  )
}