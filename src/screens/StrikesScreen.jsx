import Header from "../components/header/Header";
import Sidebar, { pages } from "../components/sidebar/Sidebar";
import Infobar from "../components/infobar/Infobar";
import StrikeItem from '../components/component_list/StrikeItem';
import { useState, useEffect } from "react";
import axios from "axios";
import { URL_PATH } from "../Constants";

export default function Strikes () {
  const title = 'Список предупреждений'
  const [strikes, setStrikes] = useState([])

  useEffect(()=>{
      loadStrikes();
  }, []);

  const loadStrikes=async()=>{
    await axios.get(URL_PATH + '/strike')
            .then((response)=>setStrikes(response.data))
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
          <Sidebar curPage={pages.strikes}/>
          <div className="vertical__line"/>
          <div className="column">
            <Infobar/>
            <div className="content__list">
                <div className="heading__A2">{title}</div>
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