import Header from "../components/header/Header";
import Sidebar, { pages } from "../components/sidebar/Sidebar";
import Infobar from "../components/infobar/Infobar";
import AdvertisementItem from '../components/component_list/AdvertisementItem';
import { useState, useEffect } from "react";
import axios from "axios";
import { AD_STATUS_SENT_MODERATION, URL_PATH, isAdmin } from "../Constants";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/AuthService";
import ApiClient from "../services/ApiClient";

export default function ResolvedAds () {
  let navigate = useNavigate()
  const [advertisements, setAdvertisement] = useState([])

  useEffect(()=>{
    const curUser = AuthService.getCurrentUser()
    const curRole = AuthService.getCurrentRole()
    if (!curUser || !isAdmin(curRole)) {
        navigate("/auth")
      } else {
        loadAds();
      }
  }, []);

  const loadAds=async()=>{
      ApiClient.findAllAds(data => 
        setAdvertisement(data.filter((item)=>item.status!==AD_STATUS_SENT_MODERATION))
      )
  }
  
  return (
    <div>
      <Header/>
        <div className="row">
          <Sidebar curPage={pages.resolved_ads}/>
          <div className="vertical__line"/>
          <div className="column">
            <Infobar/>
            <div className="content__list">
              <div className="heading__A2">{
                    advertisements.length===0 ? "Нет объявлений на модерацию" : "Закрытые объявления"
              }
              </div>
              {
                advertisements.map(ad => (
                  <AdvertisementItem data={ad}/>
                ))
              }
            </div>
          </div>
        </div>
    </div>
  )
}