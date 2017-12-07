import React from 'react'
import PropTypes from 'prop-types'
import "./index.css"
import {
    Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink,NavbarBrand
} from 'reactstrap'

import $ from 'jquery'

const navstat = $(window).scroll(function() {
    if($(document).scrollTop()===0){
	return {type:'dark',color:'fade'}
    }else{
	return {type:'light', color:'white'}
    }
});
 

const NavBar =({toggle,isOpen,toggleLogin,toggleQRcode})=>(
        <Navbar color={navstat.color} fixed="top" dark={true} expand="md" className="navbar">
	<NavbarBrand href="/">
	<img src="http://wanxiaoo.cn:6262/logo/logo.png" className="logo mr-3" alt="not found"/>草市集
    </NavbarBrand>
        <NavbarToggler onClick={toggle}/>
        <Collapse isOpen={isOpen} navbar >
        <Nav className="ml-auto" navbar>
        <NavItem><NavLink href="/">首页</NavLink></NavItem>
        <NavItem><NavLink href="/intro">产品介绍</NavLink></NavItem>
        <NavItem><NavLink href="#" onClick={toggleQRcode}>我要开店</NavLink></NavItem>
        <NavItem><NavLink href="/">商家入驻</NavLink></NavItem>
	<NavItem><NavLink href="#" onClick={toggleLogin}>商家后台</NavLink></NavItem>
        </Nav>
        </Collapse>
        </Navbar>
)

NavBar.propTypes = {
    p : PropTypes.shape({
	open: PropTypes.func.isRequired,
	isOpen: PropTypes.bool.isRequired
    })
}

export default NavBar
