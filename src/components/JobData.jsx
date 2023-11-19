import data from "../staticData/developer.json"
import "../styles/Developer.css"
import { Link } from 'react-router-dom'


const JobData = () => {
    const linkStyle = {
        textDecoration:'none',
        color:'inherit'
    };

    const handleClick = (e) => {
      console.log('event', e);
    }
  return (
    <div className="job-container">
        <div className="job-header">
        <h1 className="team">Open Positions</h1>
        <h3 className="text">Get your dream job by applying</h3>

        <div className="user-container-left">
        {data.users.map((user) => (
            <div className="user" key={user.id}>
                <Link to={`/user/${user.id}`} className="user-link">
                <div className="user-thumbnail">
                    <img src={user.thumbnail} alt="user" loading="lazy" />
                </div>
                <br></br>
                <div className="user-info">
                    <h2 className="user-name">{user.jobTitle}</h2>
                    <h3 className="user-type">{user.jobType}</h3>
                    <div className="location-container">
                        <img className="user-location-img"  src="/images/location.png" alt="location" />
                        <div className="user-location">{user.location}</div>
                    </div>
                </div>
                
                <div className="user-container-right">
                <div className="user-stack">
                    <div className="stack-list">
                    {user.stack.map((stack) => (
                        <div className="stack-name">{stack}</div>
                        ))}
                    </div>
                </div>
                <div className="user-btn">
                <button className="button" onClick={handleClick} type="button">Apply</button>
                </div>
                </div>
                   
                </Link>
            </div>
                    ))
                }
       
        </div>

        </div>
    </div>
  )
}

export default JobData