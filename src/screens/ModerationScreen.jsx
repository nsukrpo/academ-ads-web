import Header from "../components/header/Header";
import Sidebar, { pages } from "../components/sidebar/Sidebar";
import Infobar from "../components/infobar/Infobar";
import AdvertisementItem from '../components/component_list/AdvertisementItem';
import { useState, useEffect } from "react";
import { AD_STATUS_SENT_MODERATION, isAdmin } from "../Constants";
import AuthService from "../services/AuthService";
import { useNavigate } from "react-router-dom";
import ApiClient from "../services/ApiClient";
import Pagination from "../components/elements/Pagination";

export default function Moderation () {
  let navigate = useNavigate()
  const [advertisements, setAdvertisement] = useState([])
  // const [activePage, setActivePage] = useState(1);

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
    // ApiClient.findAllAds(
    //   AD_STATUS_SENT_MODERATION, 
    //   activePage-1, 
    //   data => setAdvertisement(data)
    // )
    
    
    ApiClient.findAllAds(
      null,
      -1, 
      data => setAdvertisement(data.filter((item)=>item.status===AD_STATUS_SENT_MODERATION))
    )
  }
  // const paginate = (pageNumber) => {
  //   setActivePage(pageNumber);
  // }
  
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
                  advertisements.map((ad)=>(
                      <AdvertisementItem data={ad}/>
                  ))
                }
            </div>
            {/*<Pagination
                activePage={activePage}
                paginate={paginate}
              />*/}
          </div>
        </div>
    </div>
  )
}