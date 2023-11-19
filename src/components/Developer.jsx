import JobData from './JobData'
import "../styles/Developer.css"


const Developer = () => {
  return (
    <div className="container">
       <div className="top-container">
        <div className="top-header">
            <h1 className="team">Join Our Team</h1><br></br>
            <p className="text">Build your career and work with our highly experienced engineer</p>
        </div>
        <div className="top-header-img">
            <img className="image" src="/images/images.jpeg" alt="developer" />
        </div>
      </div>
      <JobData></JobData> 
    </div>
  )
}

export default Developer