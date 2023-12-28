import Header from "../components/header/Header";
import Sidebar, { pages } from "../components/sidebar/Sidebar";
import Infobar from "../components/infobar/Infobar";
import BanItem from '../components/component_list/BanItem';
import { useState, useEffect } from "react";
import { isAdmin } from "../Constants";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/AuthService";
import ApiClient from "../services/ApiClient";

export default function Blockings () {
  let navigate = useNavigate()
  
  const [blockings, setBlockings] = useState([])

  useEffect(()=>{
    const curUser = AuthService.getCurrentUser()
    const curRole = AuthService.getCurrentRole()
    if (!curUser || !isAdmin(curRole)) {
        navigate("/auth")
      } else {
        loadBlockings();
      }
  }, []);

  const loadBlockings=async()=>{
    ApiClient.findAllBlockings(data => setBlockings(data))
  }

  return (
    <div>
      <Header/>
        <div className="row">
          <Sidebar curPage={pages.blockings}/>
          <div className="vertical__line"/>
          <div className="column">
            <Infobar/>
            <div className="content__list">
                <div className="heading__A2">Список блокировок</div>
                {
                  blockings?.map((ad)=>(
                      <BanItem data={ad}/>
                  ))
                }
            </div>
          </div>
        </div>
    </div>
  )
}