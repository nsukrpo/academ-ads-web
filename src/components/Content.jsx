import Infobar from "./infobar/Infobar"
import AdvertisementsList from "./advertisements/AdvertisementsList"

function Content() {
    return (
        <div className="content__column">
            <Infobar/>
            <AdvertisementsList/>
        </div>
    )
}

export default Content;