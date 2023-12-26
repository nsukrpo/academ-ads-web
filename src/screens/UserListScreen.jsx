import { useNavigate } from "react-router-dom"
import Header from "../components/header/Header"
import Sidebar, { pages } from "../components/sidebar/Sidebar"
import UsersList from "../components/users_list/UsersList"
import { useEffect } from "react"
import AuthService from "../services/AuthService"
import { isAdmin } from "../Constants"

export default function UserListScreen() {
    let navigate = useNavigate()

    useEffect(()=>{
      const curUser = AuthService.getCurrentUser()
      const curRole = AuthService.getCurrentRole()
      if (!curUser || !isAdmin(curRole)) {
        navigate("/auth")
      }
    },[])

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