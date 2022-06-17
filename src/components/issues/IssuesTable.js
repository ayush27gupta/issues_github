import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { useState } from 'react';
import { useEffect,useContext } from 'react';
import { DataContext } from '../context/DataContext';
import { useNavigate } from 'react-router-dom';

import '../issues/issues.css'

export default function BasicTable() {
    const [issueData,setIssueData]=useContext(DataContext);
    const [allIssues,setAllIssues]=useState([...issueData]);
    const [state, setState]=useState('all');
    const [label, setLabel]=useState('');
    const [assignee, setAssignee]=useState('');
    const [labelsArray, setLabelsArray]=useState([]);
    const [assigneeArray,setAssigneeArray]=useState([]);

    useEffect(() => {
     
      axios.get('https://api.github.com/repos/pallets/click/labels').then(
          res=>{
              const labelsFetched=res.data;
              setLabelsArray(labelsFetched);
          }
      )
        
      }, [])
    useEffect(() => {
      axios.get('https://api.github.com/repos/pallets/click/assignees').then(
          res=>{
              const assigneesFetched=res.data;
              setAssigneeArray(assigneesFetched);
          }
      )
      }, [])

      
    

    const handleChange = (e) => {
      const stateValue=e.target.value;
      setState(stateValue);
      if(stateValue!=="all")
      {
        const newData=allIssues.filter(item=>item.state===stateValue);
        setIssueData(newData);
      }
      else
      {
        setIssueData([...allIssues]);
      }

    };


    const handleLabel = (e) =>{
      const currentLabel=e.target.value;
      setLabel(currentLabel);
      const issues = allIssues.filter(issue => {
        const labels = issue?.labels?.map(label => label?.name);
        return labels.includes(currentLabel)
      })
      setIssueData(issues || [])
    }

    const handleAssignee=(e)=>{
      const currentAssignee=e.target.value;
      setAssignee(currentAssignee);
      const issues=allIssues.filter(issue=>{
        const assignees=issue?.assignees?.map(assignee=>assignee?.login);
        return assignees.includes(currentAssignee)
      })
      setIssueData(issues || []);
    }



    let navigate=useNavigate();

    const handleClick =(e)=>{
      e.preventDefault();
      const issueId=e.target.value;
      navigate("/issue",{state:{issueID:issueId}})
    }

  const filterIssues = () => {
    // return allIssues
    return allIssues.filter(issue => {
     
      if(state != 'all' && state != issue.state.toLowerCase()) {
        return false
      }
      let hasAssignee = true
      if(assignee) {
        const assignees = issue?.assignees?.map(assignee=>assignee?.login);
        hasAssignee = assignees.includes(assignee)
      }
      let hasLabel = true
      if(label) {
        const labels = issue?.labels?.map(label=>label?.name);
        hasLabel = labels.includes(label)
      }

      return hasAssignee && hasLabel
    })
  }

  const filtered = filterIssues();
  console.log(filtered)


  return (
    <>
    <div className="filters">
      <div className="filter">
        <label htmlFor="labels" className="label">State:</label>
        <select name="state" id="state" onChange={handleChange} className="state-filter" >
          <option value="all">All</option>
          <option value="open">Open</option>
          <option value="closed">Closed</option>
        </select>
      </div>

      <div className="filter">
      <label htmlFor="labels" className="label">Labels:</label>
          <select name="labels" id="labels" onChange={handleLabel} className="labels-filter" >
              {
                labelsArray.map((item) => 
                  {
                    return <option value={item.name}>{item.name}</option>
                
                  } 
                )
              }
          </select>
      </div>

      <div className="filter">
        <label htmlFor="assignee" className="label">Assignee:</label>
        <select name="assignee" id="assignee" onChange={handleAssignee} className="assignee-filter" >
              <option value="dzcode">dzcode</option>
              <option value="paxnovem">paxnovem</option>
              <option value="peacock0803sz">peacock0803sz</option>
              <option value="davidism">davidism</option>  
        </select> 
      </div>  
    </div>
    
    {/* <TableContainer component={Paper} style={{width:"65vw",margin:"auto" ,backgroundColor:"#ffffe6",border:"0.5px solid black"}}> */}
    <TableContainer component={Paper} style={{width:"65vw",margin:"auto" ,backgroundColor:"#ebebeb",border:"0.5px solid black"}}>
      <Table sx={{ minWidth: 400 }} aria-label="simple table">
      <TableHead>
          <TableRow>
            <TableCell style={{fontWeight:"bold"}}>Issues</TableCell>
            <TableCell style={{fontWeight:"bold"}}>State</TableCell>
            <TableCell style={{fontWeight:"bold"}}>Created On</TableCell>
            <TableCell style={{fontWeight:"bold"}}>Assignees</TableCell>
            <TableCell style={{fontWeight:"bold"}}>Labels</TableCell>  
          </TableRow>
        </TableHead>
        <TableBody>
          {filtered.map((issue) => (
            <TableRow
              key={issue.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <li className='issue-title' value={issue.id} onClick={handleClick}  style={{color:"black",padding:"0",margin:'0'}}>{issue.title}</li>
               
              </TableCell>
              <TableCell component="th" scope="row">
                {issue.state}
              </TableCell>
              <TableCell component="th" scope="row">
                {issue.created_at.substring(0,10)}
              </TableCell>
              <TableCell component="th" scope="row">
                {issue.assignees.map(item=>item.login)}  
              </TableCell>
              <TableCell component="th" scope="row">
              <span className="badge badge-pill badge-primary">{issue.labels.map(item=>item.name)}</span>
              </TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
