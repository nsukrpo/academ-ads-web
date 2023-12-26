import { useNavigate } from "react-router-dom"
import Header from "../components/header/Header"
import Sidebar from "../components/sidebar/Sidebar"
import UserProfile from "../components/user_profile/UserProfile"
import { useEffect } from "react"
import AuthService from "../services/AuthService"
import { isAdmin } from "../Constants"

export default function UserProfileScreen() {
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
              <Sidebar/>
              <div className="vertical__line"/>
              <div className="column">
                <UserProfile/>
              </div>
            </div>
        </div>
    )
}