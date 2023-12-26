import Header from "../components/header/Header";
import Sidebar, { pages } from "../components/sidebar/Sidebar";
import Infobar from "../components/infobar/Infobar";
import BanItem from '../components/component_list/BanItem';
import { useState, useEffect } from "react";
import axios from "axios";
import { URL_PATH, isAdmin } from "../Constants";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/AuthService";

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
    await axios.get(URL_PATH + '/blocking')
    .then((response)=>setBlockings(response.data))
    .catch(function(error) {
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
            console.log(error.request);
        } else {
            console.log('Error', error.message);
        }
    })
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