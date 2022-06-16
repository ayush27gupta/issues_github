import axios from "axios";
import { createContext,useState,useEffect } from "react";


export const DataContext=createContext();

const DataProvider=(props)=>{
    const [issuesData,setIssuesData]=useState([]);
    useEffect(() => {
     
        axios.get('https://api.github.com/repos/pallets/click/issues?state=all&per_page=100').then(
            res=>{
                const dataFetched=res.data;
                setIssuesData(dataFetched);
            }
        )
          
        }, [])

        // console.log(issuesData.map(item=>item.title));


        if (issuesData.length === 0) {
            return null;
          } else {
            return (
              <DataContext.Provider value={[issuesData, setIssuesData]}>
                {props.children}
              </DataContext.Provider>
            );
          }
        };

    export default DataProvider;
