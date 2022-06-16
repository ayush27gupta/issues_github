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

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import '../issues/issues.css'


export default function BasicTable() {
    // const [data,setData]=useState([]);
    const [issueData,setIssueData]=useContext(DataContext);
    const [allIssues,setAllIssues]=useState([...issueData]);
    const [state, setState] = React.useState('');
    const [labels,setLabels]=useState([]);

    useEffect(() => {
     
      axios.get('https://api.github.com/repos/pallets/click/labels').then(
          res=>{
              const labelsFetched=res.data;
              setLabels(labelsFetched);
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
      console.log(currentLabel);
      // const newData=allIssues.filter(items=>items.labels.map(item=>item.name===currentLabel))
      const lab=allIssues.map(item=>item.labels);
      console.log(lab);
      const labe=lab.filter(item=>item.map(items=>items.name===currentLabel));
      console.log(labe);
    }
    

  return (
    <>
    <div className="filters">
      <div className="state-filter filter">
        
      <Box sx={{ width:"10vw",margin:"1rem",backgroundColor:"white",color:"black" }}>
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
    </Box>

      </div>

      <div className=" filter">
      <label htmlFor="labels">Labels:</label>

        <select name="labels" id="labels" onChange={handleLabel} className="labels-filter" >
          {
            labels.map((item) => {
              return <option value={item.name}>{item.name}</option>
          
          })}


        </select>
      </div>
      
    </div>
    <TableContainer component={Paper} style={{width:"65vw",margin:"auto" ,backgroundColor:"#ffffe6",border:"0.5px solid black"}}>
      <Table sx={{ minWidth: 400 }} aria-label="simple table">
      <TableHead>
          <TableRow>
            <TableCell style={{fontWeight:"bold"}}>Issues</TableCell>
            <TableCell style={{fontWeight:"bold"}}>State</TableCell>
            <TableCell style={{fontWeight:"bold"}}>Created At</TableCell>
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
                {issue.title}
              </TableCell>
              <TableCell component="th" scope="row">
                {issue.state}
              </TableCell>
              <TableCell component="th" scope="row">
                {issue.created_at}
              </TableCell>
              <TableCell component="th" scope="row">
                {issue.assignees.map(item=>item.login)}
              </TableCell>
              <TableCell component="th" scope="row">
                {issue.labels.map(item=>item.name)}
              </TableCell>
              {/* <TableCell align="right">{row.calories}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
