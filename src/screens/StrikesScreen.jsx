import Header from "../components/header/Header";
import Sidebar, { pages } from "../components/sidebar/Sidebar";
import Infobar from "../components/infobar/Infobar";
import ComponentList from '../components/component_list/ComponentList';
import StrikeItem from '../components/component_list/StrikeItem';

export default function Strikes () {
  const title = 'Список предупреждений'
  
  return (
    <div>
      <Header/>
        <div className="row">
          <Sidebar curPage={pages.strikes}/>
          <div className="vertical__line"/>
          <div className="column">
            <Infobar/>
            <ComponentList title={title} item_func={StrikeItem}/>
          </div>
        </div>
    </div>
  )
}