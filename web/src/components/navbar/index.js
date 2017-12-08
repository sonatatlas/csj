import React from 'react'
import PropTypes from 'prop-types'
import "./index.css"
import {
    Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink,NavbarBrand
} from 'reactstrap'

import {scrollWindow} from '../../actions/navbar'


const NavBar =({toggle,isOpen,toggleQRcode,navStat})=>(
        <Navbar color={navStat().color} fixed="top" dark={navStat().dark} light={navStat().light} expand="md" className="navbar">
	<NavbarBrand href="/">
	<img src="http://wanxiaoo.cn:6262/logo/logo.png" className="logo mr-3" alt="not found"/>草市集
    </NavbarBrand>
        <NavbarToggler onClick={toggle}/>
        <Collapse isOpen={isOpen} navbar >
        <Nav className="ml-auto" navbar>
        <NavItem><NavLink href="/"  >首页</NavLink></NavItem>
        <NavItem><NavLink href="/home/#intro">产品介绍</NavLink></NavItem>
        <NavItem><NavLink href="#" onClick={toggleQRcode}>我要开店</NavLink></NavItem>
        <NavItem><NavLink href="/">商家入驻</NavLink></NavItem>
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
