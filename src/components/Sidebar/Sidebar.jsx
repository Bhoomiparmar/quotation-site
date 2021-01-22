/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================


*/
import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import AdminNavbarLinks from "../Navbars/AdminNavbarLinks.jsx";

import logo from "assets/img/reactlogo.png";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
    };
  }

  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }
  updateDimensions() {
    this.setState({ width: window.innerWidth });
  }
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  render() {
    const sidebarBackground = {
      backgroundImage: "url(" + this.props.image + ")",
    };
    return (
      <div id="sidebar" className="sidebar" data-color={this.props.color}>
        {this.props.hasImage ? (
          <div className="sidebar-background" style={sidebarBackground} />
        ) : null}
        <div className="logo">
          <a
            href="https://www.pipingmart.com?ref=lbd-sidebar"
            className="simple-text logo-mini"
          >
            <div className="logo-img">
              <img src={logo} alt="logo_image" />
            </div>
          </a>
          <a
            href="https://www.pipingmart.com?ref=lbd-sidebar"
            className="simple-text logo-normal"
          >
            Piping Mart
          </a>
        </div>
        <div className="sidebar-wrapper">
          <ul className="nav">
            {this.state.width <= 991 ? <AdminNavbarLinks /> : null}
            {this.props.routes.map((prop, key) => {
              if (!prop.redirect)
                return (
                  <li
                    className={
                      prop.upgrade
                        ? "active active-pro"
                        : this.activeRoute(prop.layout + prop.path)
                    }
                    key={key}
                  >
                    <NavLink
                      to={prop.layout + prop.path}
                      className="nav-link"
                      activeClassName="active"
                    >
                      <i className={prop.icon} />
                      <p>{prop.name}</p>
                    </NavLink>
                  </li>
                );
              return null;
            })}
            {/* <Nav>
              <NavDropdown
                eventKey={2}
                title={notification}
                noCaret
                id="basic-nav-dropdown"
              >
                <Link to="/admin/unregistered">
                  <MenuItem
                    eventKey={3.1}
                    style={{ color: "#fff", backgroundColor: "#34A4F8" }}
                  >
                    Product Management
                  </MenuItem>
                </Link>
                <MenuItem
                  eventKey={3.2}
                  style={{ color: "#fff", backgroundColor: "#34A4F8" }}
                >
                  Material Management
                </MenuItem>
                <MenuItem
                  eventKey={3.3}
                  style={{ color: "#fff", backgroundColor: "#34A4F8" }}
                >
                  Mapping Material
                </MenuItem>
                <MenuItem
                  eventKey={3.4}
                  style={{ color: "#fff", backgroundColor: "#34A4F8" }}
                >
                  Grades
                </MenuItem>
                <MenuItem
                  eventKey={3.5}
                  style={{ color: "#fff", backgroundColor: "#34A4F8" }}
                >
                  Sub Product
                </MenuItem>
              </NavDropdown>
            </Nav> */}
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;
