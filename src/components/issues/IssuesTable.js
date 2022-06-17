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
    // const [data,setData]=useState([]);
    const [issueData,setIssueData]=useContext(DataContext);
    const [allIssues,setAllIssues]=useState([...issueData]);
    const [state, setState] = useState('');
    const [label,setLabel]=useState('');
    const [assignee,setAssignee]=useState('');
    const [labelsArray,setLabelsArray]=useState([]);
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
      console.log(stateValue);
      if(stateValue!=="all")
      {
      const newData=allIssues.filter(item=>item.state===stateValue);
      // console.log(newData.map(item=>item.state));
      setIssueData(newData);
      }
      else{
        console.log('else called');
       
        setIssueData([...allIssues]);
        // console.log(issueData.map(item=>item.state));
        
      }

    };


    const handleLabel = (e) =>{
      
      const currentLabel=e.target.value;
      setLabel(currentLabel);
      console.log(currentLabel);
      // const newData=allIssues.filter(items=>items.labels.map(item=>item.name===currentLabel))
      const newData=allIssues.filter(issue=>issue.labels.forEach(item=>item.name===currentLabel))  
      console.log("new",newData);    
      // allIssues.filter(item.forEach)

    }

    const handleAssignee=(e)=>{
      const currentAssignee=e.target.value;
      setAssignee(currentAssignee);
      console.log(currentAssignee);

      const newData=allIssues.map(issue=>issue.assignees.forEach(item=>item.login===currentAssignee));
      console.log(newData);
      // console.log(allIssues.filter(issue=>issue.assignees.map(item=>item.login===currentAssignee)));
      
    }



    let navigate=useNavigate();

    const handleClick =(e)=>{
      e.preventDefault();
      const issueId=e.target.value;

      console.log(issueId);

      navigate("/issue",{state:{issueID:issueId}})
    }
    

  return (
    <>
    <div className="filters">
      <div className="filter">
        
      {/* <Box sx={{ width:"10vw",margin:"1rem",backgroundColor:"white",color:"black" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">State</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={state}
          label="State"
          onChange={handleChange}
        >
          <MenuItem value={"all"}>all</MenuItem>
          <MenuItem value={"open"}>open</MenuItem>
          <MenuItem value={"closed"}>closed</MenuItem>
        </Select>
      </FormControl>
    </Box> */}
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
          {/* <Box sx={{ width:"10vw",margin:"1rem",backgroundColor:"white",color:"black" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Labels</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={state}
          label="Labels"
          onChange={handleLabel}
        >
          {labelsArray.map((item, pos) => {
        return (
          <MenuItem key={pos} value={item}>
            {item.name}
          </MenuItem>
        )
      })}
        </Select>
      </FormControl>
    </Box> */}
    
      </div>

      <div className="filter">
        <label htmlFor="assignee" className="label">Assignee:</label>
        <select name="assignee" id="assignee" onChange={handleAssignee} className="assignee-filter" >
          {
              assigneeArray.map((item) => 
                {
                  
                    return <option value={item.login}>{item.login}</option>
                
                }
              )
          }
        </select>
         {/* <Box sx={{ width:"10vw",margin:"1rem",backgroundColor:"white",color:"black" }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Assignee</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={state}
              label="Assignee"
              onChange={handleAssignee}
            >
              {assigneeArray.map((item, pos) => {
            return (
              <MenuItem key={pos} value={item}>
                {item.login}
              </MenuItem>
            )
          })}
            </Select>
          </FormControl>
        </Box> */}
      </div>
      
    </div>
    {/* <TableContainer component={Paper} style={{width:"65vw",margin:"auto" ,backgroundColor:"#ffffe6",border:"0.5px solid black"}}> */}
    <TableContainer component={Paper} style={{width:"65vw",margin:"auto" ,backgroundColor:"#ffffe6",border:"0.5px solid black"}}>
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
          {issueData.map((issue) => (
            <TableRow
              key={issue.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <li className='issue-title' value={issue.id} onClick={handleClick}  style={{color:"black",padding:"0",margin:'0'}}>{issue.title}</li>
                {/* {console.log("issue",issue.id)} */}
              </TableCell>
              <TableCell component="th" scope="row">
                {issue.state}
              </TableCell>
              <TableCell component="th" scope="row">
                {issue.created_at.substring(0,10)}
              </TableCell>
              <TableCell component="th" scope="row">
                {/* <img src={issue.assignees.map(item=>item.avatar_url)} height="20px" width="20px" alt="img" style={{border:"0.5px solid white",borderRadius:"50%"}}></img>  */}
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
