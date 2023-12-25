import Header from "../components/header/Header";
import Sidebar, { pages } from "../components/sidebar/Sidebar";
import Infobar from "../components/infobar/Infobar";
import AdvertisementItem from '../components/component_list/AdvertisementItem';
import { useState, useEffect } from "react";
import axios from "axios";
import { AD_STATUS_SENT_MODERATION, URL_PATH } from "../Constants";

export default function ResolvedAds () {
  const title = 'Закрытые объявления'
  const [advertisements, setAdvertisement] = useState([])

  useEffect(()=>{
      loadAds();
  }, []);

  const loadAds=async()=>{
      const result=await axios.get(URL_PATH + '/advertisement', {params: {}})
      setAdvertisement(result.data.filter((item)=>item.status!==AD_STATUS_SENT_MODERATION));
      
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
                    (advertisements.length===0 && "Нет объявлений на модерацию") ||
                    title
              }
              </div>
              {
                advertisements.map((ad)=>(
                  <AdvertisementItem data={ad}/>
                ))
              }
            </div>
          </div>
        </div>
    </div>
  )
}