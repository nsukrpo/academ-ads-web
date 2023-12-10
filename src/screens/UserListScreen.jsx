import Header from "../components/header/Header"
import Sidebar from "../components/sidebar/Sidebar"
import UsersList from "../components/users_list/UsersList"


export default function UserListScreen() {
    return(
        <div>
          <Header/>
            <div className="row">
              <Sidebar/>
              <div className="vertical__line"/>
              <div className="column">
                <UsersList/>
              </div>
            </div>
        </div>
    )
}