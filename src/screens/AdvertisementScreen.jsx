import Header from "../components/header/Header"
import Sidebar from "../components/sidebar/Sidebar"
import Infobar from "../components/infobar/Infobar"
import "./../components/component_list/component.css"
import Advertisement from "../components/advertisement/Advertisement"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import AuthService from "../services/AuthService"
import { isAdmin } from "../Constants"

export default function AdvertisementScreen() {
  let navigate = useNavigate()

  useEffect(()=>{
    const curUser = AuthService.getCurrentUser()
    const curRole = AuthService.getCurrentRole()
    if (!curUser || !isAdmin(curRole)) {
        navigate("/auth")
      }
  }, []);

    return (
        <div>
          <Header/>
            <div className="row">
              <Sidebar/>
              <div className="vertical__line"/>
              <div className="column">
                <Infobar/>
                <div className="content__list">
                  <Advertisement/>
                </div>            
              </div>
            </div>
        </div>
      )
}