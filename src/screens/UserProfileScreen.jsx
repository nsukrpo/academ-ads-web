import Header from "../components/header/Header"
import Sidebar from "../components/sidebar/Sidebar"
import UserProfile from "../components/user_profile/UserProfile"

export default function UserProfileScreen() {
    return(
        <div>
          <Header/>
            <div className="row">
              <Sidebar/>
              <div className="vertical__line"/>
              <div className="column">
                <UserProfile/>
              </div>
            </div>
        </div>
    )
}