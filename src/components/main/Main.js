import React from 'react'
import Banner from '../banner/Banner'
import CodeTab from '../code-tab/CodeTab'
import Navbar from '../navbar/Navbar'
import RepoTab from '../repo-tab/RepoTab'
import IssuesTable from '../issues/IssuesTable'

// import IssueGrid from '../issues/IssueGrid'

const Main = () => {
  return (
    <div>
        <Navbar/>
        <RepoTab/>
        <CodeTab/>
        <Banner/>
        {/* <Filters/> */}
        {/* <Issues/> */}
        <IssuesTable/>
        {/* <IssueGrid/> */}
    </div>
  )
}

export default Main