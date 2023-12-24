import './component.css';
import './../../styles/text.css';
import { Link } from 'react-router-dom';

function AdvertisementItem({data}) {
    const [user, setUser] = useState({
            name: "",
            regDate: "",
            sales: 0,
            purchaces: 0,
    })
    useEffect(()=>{
        loadUser(data.user)
    }, [])

    const loadUser = async(id)=>{
        const result = await axios.get(URL_PATH+'/user/'+id)
        setUser(result.data)
    }

    return (
        <div className="advertisement__item">
            <Link to="/advertisement/id" style={{ textDecoration: 'none' }}>
                <div className="row">
                    <div className="component__content">
                        <div className="heading__A2 salad">{data.title}</div>
                        <div className="heading__D1 nunito">{user.name}</div>
                        <div className="heading__D1 nunito">{data.description}</div>
                    </div>
                    <div className="ad__preview"/>
                </div>
            </Link>
        </div>
    )
}

export default AdvertisementItem;