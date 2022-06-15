import React from 'react'

const Navbar = () => {
  return (
    <div><nav className="navbar navbar-expand-lg navbar-light bg-light">
      <span style={{margin:"0px 5px"}}><img src="https://cdn-icons-png.flaticon.com/512/25/25657.png" alt="" height="50px" width="50px"/></span>
    <a className="navbar-brand" href="#">GitHub</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <a className="nav-link" href="#">Pull Requests</a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="#">Issues <span className="sr-only">(current)</span></a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link " href="#">Marketplace</a>
        </li>
      </ul>
      <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
        <img src="https://t3.ftcdn.net/jpg/01/81/15/52/240_F_181155209_RbeeKxw1aoThTBV9Q6NWxeGNwsHhL1ad.jpg" alt="" height="50px" width="50px" />
      </form>

    </div>
  </nav>

    </div>
  )
}

export default Navbar