import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import Infobar from "../components/infobar/Infobar";
import ComponentList from '../components/component_list/ComponentList';
import BanItem from '../components/component_list/BanItem';

export default function Blockings () {
  const title = 'Список блокировок'
  
  return (
    <div>
      <Header/>
        <div className="row">
          <Sidebar/>
          <div className="vertical__line"/>
          <div className="column">
            <Infobar/>
            { ComponentList(title, BanItem)}
          </div>
        </div>
    </div>
  )
}