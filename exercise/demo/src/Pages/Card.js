import React from 'react'
import { Link} from "react-router-dom";

function Card({user}) {
    const style1 = {
        width: '20rem',
        margin : '10px',
        border: 'none',
    }

    const style2 = {
        width: '15rem',
        margin : '1rem',
        height: '15rem'
    }

    return (
        <div className="card" style={style1}>
            <img className="card-img-top" style={style2} src={user.avatar} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{user.first_name}</h5>
                <p className="card-text">{user.email}</p>
                <Link to={`/info/${user.id}`} className="btn btn-secondary">More Info</Link>
            </div>
        </div>
    )
}

export default Card
