import Header from "../components/header/Header";
import Sidebar, { pages } from "../components/sidebar/Sidebar";
import Infobar from "../components/infobar/Infobar";
import StrikeItem from '../components/component_list/StrikeItem';
import { useState, useEffect } from "react";
import { isAdmin } from "../Constants";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/AuthService";
import ApiClient from "../services/ApiClient";

export default function Strikes () {
  let navigate = useNavigate()
  const [strikes, setStrikes] = useState([])

  useEffect(()=>{
    const curUser = AuthService.getCurrentUser()
      const curRole = AuthService.getCurrentRole()
      if (!curUser || !isAdmin(curRole)) {
        navigate("/auth")
      } else {
        loadStrikes();
      }
  }, []);

  const loadStrikes=async()=>{
    ApiClient.findAllStrikes(data => setStrikes(data))
  }

  return (
    <div>
      <Header/>
        <div className="row">
          <Sidebar curPage={pages.strikes}/>
          <div className="vertical__line"/>
          <div className="column">
            <Infobar/>
            <div className="content__list">
                <div className="heading__A2">Список предупреждений</div>
                {
                  strikes?.map((ad)=>(
                      <StrikeItem data={ad}/>
                  ))
                }
            </div>
          </div>
        </div>
    </div>
  )
}