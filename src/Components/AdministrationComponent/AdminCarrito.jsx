import React, { useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.css";

const Index = (props) => {

return (
    <React.Fragment>
      <div className="nav-left-sidebar sidebar-dark">
            <div className="slimScrollDiv" style="position: relative; overflow: hidden; width: auto; height: 100%;"><div className="menu-list" style="overflow: hidden; width: auto; height: 100%;">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="d-xl-none d-lg-none" href="#">Dashboard</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav flex-column">
                            <li className="nav-divider">
                                Menu
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link active" href="#" data-toggle="collapse" aria-expanded="true" data-target="#submenu-1" aria-controls="submenu-1"><i className="fa fa-fw fa-user-circle"></i>Dashboard <span className="badge badge-success">6</span></a>
                                <div id="submenu-1" className="submenu collapse show" style="">
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                            <a className="nav-link" href="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-1-2" aria-controls="submenu-1-2">E-Commerce</a>
                                            <div id="submenu-1-2" className="collapse submenu" style="">
                                                <ul className="nav flex-column">
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="#">E Commerce Dashboard</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="#">Product List</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="#">Product Single</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="#">Product Checkout</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Finance</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Sales</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-1-1" aria-controls="submenu-1-1">Infulencer</a>
                                            <div id="submenu-1-1" className="collapse submenu" style="">
                                                <ul className="nav flex-column">
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="#">Influencer</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="#">Influencer Finder</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="#">Influencer Profile</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            </ul>
                        </div>
                </nav>
            </div><div className="slimScrollBar" style="background: rgb(0, 0, 0); width: 7px; position: absolute; top: 0px; opacity: 0.4; display: none; border-radius: 7px; z-index: 99; right: 1px; height: 321px;"></div><div className="slimScrollRail" style="width: 7px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 7px; background: rgb(51, 51, 51); opacity: 0.2; z-index: 90; right: 1px;"></div></div>
        </div>

      </React.Fragment>
  );
  }
export default Index;