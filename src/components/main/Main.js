import React from 'react'
import Banner from '../banner/Banner'
import CodeTab from '../code-tab/CodeTab'
import Navbar from '../navbar/Navbar'
import RepoTab from '../repo-tab/RepoTab'
import IssuesTable from '../issues/IssuesTable'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import IssuePage from '../issues/IssuePage'

// import IssueGrid from '../issues/IssueGrid'

const Main = () => {
  return (
    <div>
        <Navbar/>
        <RepoTab/>
        <CodeTab/>
        <Banner/>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<IssuesTable/>}/>
            <Route path='/issue' element={<IssuePage/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Main