import React from 'react'
import '../repo-tab/section.css'

const Section = () => {
  return (
    <div className='repo-container'>
        <div className="left-repo">
            <div style={{margin:"10px 0px"}}><img src="https://cdn-icons-png.flaticon.com/512/748/748002.png" alt="" height='20px' width="20px"/></div>
            <div style={{margin:"10px 0px"}}><span>&nbsp;&nbsp;pallets</span><span>&nbsp;/</span><span>&nbsp;click</span></div>
        </div>
        <div className='right-repo '>
        <div className="right-repo1 box-repo">
            <div className="fork">
                <img src="https://cdn-icons-png.flaticon.com/512/1216/1216575.png" alt="" height="20px" width="20px"/>
                <span>&nbsp;&nbsp;Sponsor</span>
            </div>
        </div>
        <div className="right-repo2 box-repo">
            <div className="fork">
                <img src="https://as2.ftcdn.net/v2/jpg/00/96/48/11/1000_F_96481104_qBddfJ8fTT5Rsi8eRuJvFCWN9H6qhD4O.jpg" alt="" height="20px" width="20px"/>
                <span>&nbsp;&nbsp;Watch</span>
            </div>
        </div>
        <div className="right-repo3 box-repo">
            <div className="fork">
                <img src="https://cdn-icons-png.flaticon.com/512/2427/2427872.png" alt="" height="20px" width="20px"/>
                <span>&nbsp;&nbsp;Fork</span>
            </div>
        </div>
        <div className="right-repo4 box-repo">
            <div className="star">
                <img src="https://as1.ftcdn.net/v2/jpg/01/66/94/54/1000_F_166945469_SHjX6Exa1G17aZSZUEAzcog5hKLvRKPj.jpg" alt="" height="20px" width="20px"/>
                <span>&nbsp;&nbsp;Star</span>
            </div>
        </div>
    </div>
       
    </div>
  )
}

export default Section