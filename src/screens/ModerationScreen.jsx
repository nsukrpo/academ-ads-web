import Header from "../components/header/Header";
import Sidebar, { pages } from "../components/sidebar/Sidebar";
import Infobar from "../components/infobar/Infobar";
import AdvertisementItem from '../components/component_list/AdvertisementItem';
import { useState, useEffect } from "react";
import axios from "axios";
import { AD_STATUS_SENT_MODERATION, URL_PATH } from "../Constants";

export default function Moderation () {
  const [advertisements, setAdvertisement] = useState([])

  useEffect(()=>{
      loadAds();
  }, []);

  const loadAds=async()=>{ 
    await axios.get(URL_PATH + '/advertisement', {params: {}})
      .then((response)=>{
          setAdvertisement(response.data.filter((item)=>item.status===AD_STATUS_SENT_MODERATION))
      })
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
          <Sidebar curPage={pages.moderation}/>
          <div className="vertical__line"/>
          <div className="column">
            <Infobar/>
            <div className="content__list">
                <div className="heading__A2">{
                  (advertisements.length===0 && "Нет объявлений на модерацию") ||
                  "Объявления, ожидающие рассмотрения"
                }
                </div>
                {
                  advertisements?.map((ad)=>(
                      <AdvertisementItem data={ad}/>
                  ))
                }
            </div>
          </div>
        </div>
    </div>
  )
}