import Header from "../components/header/Header";
import Sidebar, { pages } from "../components/sidebar/Sidebar";
import Infobar from "../components/infobar/Infobar";
import StrikeItem from '../components/component_list/StrikeItem';
import { useState, useEffect } from "react";
import axios from "axios";
import { URL_PATH } from "../Constants";

export default function Strikes () {
  const title = 'Список предупреждений'
  const [users, setUsers] = useState([])
  const [strikes, setStrikes] = useState([])

  useEffect(()=>{
      loadUsers();
  }, []);
  
  useEffect(()=>{
      loadStrikes();
  }, [users]);

  const loadUsers=async()=>{
    const result = await axios.get(URL_PATH + '/user')
    setUsers(result.data);      
  }

  const loadStrikes=async()=>{
    const arr = []
    users.forEach(async (user) => {
        const result = await axios.get(URL_PATH + '/strike?user_id='+user.id, {params: {user_id: user.id}})
        arr.push(...result.data)
    })
    setStrikes(arr)
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
                  strikes.map((ad)=>(
                      <StrikeItem data={ad}/>
                  ))
                }
            </div>
          </div>
        </div>
    </div>
  )
}