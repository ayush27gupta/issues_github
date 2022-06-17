import React from 'react'
import { DataContext } from '../context/DataContext'
import { useContext } from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import '../issues/issues.css'

const IssuePage = () => {
    const [issues,setIssues]=useContext(DataContext);

    const location=useLocation();
    let loc=+location.state.issueID;
    const data=issues.filter(item=>item.id===loc);


  return (
    <div>
        <div className="card" style={{width: '65vw',margin:"auto"}}>
            <div className="card-body issue-card">
                <h5 className="card-title">{data.map(item=>item.title)}</h5>
                <br />
                <p className="card-text">{data.map(item=>item.body)}</p>
            </div>
        </div>
    </div>
  )
}

export default IssuePage