import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import Infobar from "../components/infobar/Infobar";
import ComponentList from '../components/component_list/ComponentList';
import AdvertisementItem from '../components/component_list/AdvertisementItem';

export default function Moderation () {
    const title = 'Объявления, ожидающие рассмотрения'
    
    return (
      <div>
        <Header/>
          <div className="row">
            <Sidebar/>
            <div className="vertical__line"/>
            <div className="column">
              <Infobar/>
              { ComponentList(title, AdvertisementItem)}
            </div>
          </div>
      </div>
    )
  }