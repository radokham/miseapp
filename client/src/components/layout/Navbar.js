import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse,} from "mdbreact";
import logo from "./logo.png";
import "./Navbar.css";
class NavbarPage extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
      <MDBNavbar color="#f3671f" dark expand="md">
        <MDBNavbarBrand>
          {/* <strong className="white-text">Serashop</strong> */}
          <img src={logo} alt="Cuisinier" className="navbar-brand" style={{fontFamily: "Roboto Slab, serif"}} />
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to="/home"  style={{fontFamily: "Roboto Slab, serif"}}>Accueil</MDBNavLink>
            </MDBNavItem>
             <MDBNavItem>
              <MDBNavLink to="/features" style={{fontFamily: "Roboto Slab, serif"}}>Liste des Ateliers</MDBNavLink>
            </MDBNavItem>
            {/* <MDBNavItem>
              <MDBNavLink to="/pricing">Pricing</MDBNavLink>
            </MDBNavItem>  */}
            
          </MDBNavbarNav>
          <MDBNavbarNav right>
         
            <MDBNavItem>
              <MDBNavLink to="/login" style={{fontFamily: "Roboto Slab, serif"}}>Se connecter</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
            {/* <MDBFormInline waves>
                <div className="md-form my-0">
                  <input className="form-control mr-sm-2" type="text" placeholder="Recherche Produits" aria-label="Search" />
                </div>
              </MDBFormInline> */}
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default NavbarPage;