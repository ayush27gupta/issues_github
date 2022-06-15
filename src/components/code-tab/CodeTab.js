import React from 'react'
import '../code-tab/codetab.css'

const CodeTab = () => {
  return (
    <>
    <hr />
    <div className='code-tab'>

    <div className="code-tab1 box-code"> <img src="https://cdn-icons-png.flaticon.com/512/711/711284.png" alt="" height="20px" width="20px" /> Code</div>
    <div className="code-tab2 box-code"> <img src="https://cdn-icons-png.flaticon.com/512/784/784599.png" alt="" height="20px" width="20px" /> Issues</div>
    <div className="code-tab3 box-code"> <img src="https://cdn-icons-png.flaticon.com/512/7130/7130005.png" alt="" height="20px" width="20px" /> Pull Requests</div>
    <div className="code-tab4 box-code"> <img src="https://cdn-icons.flaticon.com/png/512/3119/premium/3119150.png?token=exp=1655295329~hmac=eadfcda156ff8d41dc00f1a995f2fce7" alt="" height="20px" width="20px" /> Discussions</div>
    <div className="code-tab5 box-code"> <img src="https://cdn-icons-png.flaticon.com/512/2892/2892817.png" alt="" height="20px" width="20px" /> Insights</div>
    </div>
    <hr />
    </>
  )
}

export default CodeTab