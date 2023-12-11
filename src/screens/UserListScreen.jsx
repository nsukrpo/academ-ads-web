import Header from "../components/header/Header"
import Sidebar, { pages } from "../components/sidebar/Sidebar"
import UsersList from "../components/users_list/UsersList"


export default function UserListScreen() {
    return(
        <div>
          <Header/>
            <div className="row">
              <Sidebar curPage={pages.users}/>
              <div className="vertical__line"/>
              <div className="column">
                <UsersList/>
              </div>
            </div>
        </div>
    )
}