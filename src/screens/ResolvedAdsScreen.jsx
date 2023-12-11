import Header from "../components/header/Header";
import Sidebar, { pages } from "../components/sidebar/Sidebar";
import Infobar from "../components/infobar/Infobar";
import ComponentList from '../components/component_list/ComponentList';
import AdvertisementItem from '../components/component_list/AdvertisementItem';

export default function ResolvedAds () {
  const title = 'Закрытые объявления'
  
  return (
    <div>
      <Header/>
        <div className="row">
          <Sidebar curPage={pages.resolved_ads}/>
          <div className="vertical__line"/>
          <div className="column">
            <Infobar/>
            <ComponentList title={title} item_func={AdvertisementItem}/>
          </div>
        </div>
    </div>
  )
}