import Header from "../components/header/Header"
import Sidebar from "../components/sidebar/Sidebar"
import Infobar from "../components/infobar/Infobar"
import "./../components/component_list/component.css"
import Advertisement from "../components/advertisement/Advertisement"

export default function AdvertisementScreen() {
    return (
        <div>
          <Header/>
            <div className="row">
              <Sidebar/>
              <div className="vertical__line"/>
              <div className="column">
                <Infobar/>
                <div className="content__list">
                  <Advertisement/>
                </div>            
              </div>
            </div>
        </div>
      )
}