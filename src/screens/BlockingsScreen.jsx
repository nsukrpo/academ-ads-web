import Header from "../components/header/Header";
import Sidebar, { pages } from "../components/sidebar/Sidebar";
import Infobar from "../components/infobar/Infobar";
import ComponentList from '../components/component_list/ComponentList';
import BanItem from '../components/component_list/BanItem';

export default function Blockings () {
  const title = 'Список блокировок'
  
  return (
    <div>
      <Header/>
        <div className="row">
          <Sidebar curPage={pages.blockings}/>
          <div className="vertical__line"/>
          <div className="column">
            <Infobar/>
            <ComponentList title={title} item_func={BanItem}/>
          </div>
        </div>
    </div>
  )
}