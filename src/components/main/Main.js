import React from 'react'
import Banner from '../banner/Banner'
import CodeTab from '../code-tab/CodeTab'
import Issues from '../issues/Issues'
import Navbar from '../navbar/Navbar'
import RepoTab from '../repo-tab/RepoTab'

const Main = () => {
  return (
    <div>
        <Navbar/>
        <RepoTab/>
        <CodeTab/>
        <Banner/>
        <Issues/>
    </div>
  )
}

export default Main