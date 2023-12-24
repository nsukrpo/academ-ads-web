import Header from "../components/header/Header"
import Sidebar from "../components/sidebar/Sidebar"
import Infobar from "../components/infobar/Infobar"
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
                <ComponentList title={title} item_func={AdvertisementItem}/>                
              </div>
            </div>
        </div>
      )
}