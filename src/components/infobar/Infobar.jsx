import './infobar.css';
import './../../styles/common.css';
import './../../styles/text.css';

import { Link } from 'react-router-dom';

function Infobar() {
    return (
        <div className="infobar">
            <div className="container">
                <div className="heading__A2">Hey, Admin</div>
                {/*<Link to="/users/id" className="infobar__row" style={{ textDecoration: 'none' }}>
                    <div className="heading__B1 violet">Latest registration users</div>
                    <div className="registration__row">
                        <div className="paragraph__B1 gray">Just now</div>
                        <div className="heading__C2 secondary user__name">XYZ Name</div>
                        <div className="heading__C2 secondary">xyz@gmail.com</div>
                    </div>
                </Link>*/}
                <hr className="horizontal__line"/>
            </div>
        </div>
    )
}

export default Infobar;