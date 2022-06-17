import React from 'react'

const Navbar = () => {
  return (
    <div><nav className="navbar navbar-expand-lg bg-dark " style={{color:"white"}}>
      <span style={{margin:"0px 8px"}}><img src="https://cdn-icons.flaticon.com/png/512/3291/premium/3291667.png?token=exp=1655446254~hmac=6e63ec8c12b0b85e62b01ab031efe92f" alt="" height="50px" width="50px"/></span>
    {/* <a className="navbar-brand" href="#" style={{color:"white" ,fontWeight:"bold"}}>GitHub</a> */}
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      </form>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <a className="nav-link" href="#" style={{color:"white" ,fontWeight:"bold"}}>Pull Requests</a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="#" style={{color:"white" ,fontWeight:"bold"}}>Issues <span className="sr-only">(current)</span></a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link " href="#" style={{color:"white" ,fontWeight:"bold"}}>Marketplace</a>
        </li>
      </ul>

        <img src="https://t3.ftcdn.net/jpg/01/81/15/52/240_F_181155209_RbeeKxw1aoThTBV9Q6NWxeGNwsHhL1ad.jpg" alt="" height="50px" width="50px" />
    </div>
  </nav>

    </div>
  )
}

export default Navbar