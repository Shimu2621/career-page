import React from 'react'
import { useParams } from 'react-router-dom'
import data from "../staticData/developer.json"
import "../styles/Developer.css"

const JobList = () => {
    const { id } = useParams();
     // console.log('value of joblist component', value);
    // console.log(id);
    const jobUser = data.users.find((user) => user.id === parseInt(id));
    // console.log(jobUser);
  return (
    <div className="container">
       <div className="top-container">
        <div className="top-header">
            <h1 className="team">Join Our Team</h1><br></br>
            <p className="test">Build your career and work with our highly experienced engineer</p>
        </div>
        <div className="top-header-img">
            <img className="image" src="/images/images.jpeg" alt="developer" />
        </div>
        </div>
        <div className="user-container">
        <div className="job-list-header">
            <h1 className="job-title">{jobUser.jobTitle}</h1>
        </div>
        <div className="job-list-content">
            <div className='job-list-info'>
            <p className="job-description">
                <strong></strong> {jobUser.jobDescription}
            </p>
            <p className="job-location">
                <img className="location-img"  src="/images/location.png" alt="location" /> 
                <strong></strong> {jobUser.location}
            </p>
            <p>
                <strong>Job Type:</strong> {jobUser.jobType}
            </p>
            </div>
            <p className="job-res">
                <strong className='responsibilities'>Responsibilities:</strong>
                <ul>
                    {jobUser.responsibilities.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </p>
            
            <p className="job-required">
                <strong className="required">Required Qualification:</strong>
                <ul>
                    {jobUser.requiredQualification.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </p>
            <div className='job-others'>
            <p>
                <strong>Vacancy:</strong> {jobUser.vacancy}
            </p>
            <p>
                <strong>Salary Review:</strong> {jobUser.salaryReview}
            </p>
            <p>
                <strong>Festival Bonus:</strong> {jobUser.festivalBonus}
            </p>
            <p>
                <strong>Salary:</strong> {jobUser.salary}
            </p>
            </div>
            
            
        </div>
        </div> 
    </div>
  )
}

export default JobList