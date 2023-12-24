import Header from "../components/header/Header";
import Sidebar, { pages } from "../components/sidebar/Sidebar";
import Infobar from "../components/infobar/Infobar";
import BanItem from '../components/component_list/BanItem';
import { useState, useEffect } from "react";
import axios from "axios";
import { URL_PATH } from "../Constants";

export default function Blockings () {
  const title = 'Список блокировок'
  
  const [users, setUsers] = useState([])
  const [blockings, setBlockings] = useState([])

  useEffect(()=>{
    loadBlockings();
  }, []);

  const loadUsers=async()=>{

  }

  const loadBlockings=async()=>{
    const result = await axios.get(URL_PATH + '/user')
    const usersArr = result.data
    const arr = []
    usersArr.forEach(async (user) => {
        const result = await axios.get(URL_PATH + '/blocking?user_id='+user.id)
        arr.push(result.data)
    })
    setBlockings(arr)
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
                <div className="heading__A2">{title}</div>
                {
                  blockings.map((ad)=>(
                      <BanItem data={ad}/>
                  ))
                }
            </div>
          </div>
        </div>
    </div>
  )
}