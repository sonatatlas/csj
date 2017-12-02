import React from 'react'
import PropTypes from 'prop-types'
import "./index.css"
import {
    Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink
} from 'reactstrap'

import Login from './login'
import QRcode from './qrcode'

const NavBar =({p})=>(
        <Navbar light expand="md" fixed="top" className="navbar">
	<Login loginToggle={p.login} modalState={p.isShownLogin} completeLogin={p.completeLogin}/>
	<QRcode isQRcode={p.isQRcode} qrcode={p.qrcode} />
        <NavbarToggler onClick={p.open}/>
        <Collapse isOpen={p.isOpen} navbar style={{backgroundColor:'#fefefe'}}>
        <Nav className="navs " navbar>
        <NavItem>
	<NavLink><img src="http://192.168.1.105:6262/logo/logo.png" className="logo" alt="not found"/></NavLink>
        </NavItem>		
        <NavItem><NavLink href="/">首页</NavLink></NavItem>
        <NavItem><NavLink href="/intro">产品介绍</NavLink></NavItem>
        <NavItem><NavLink href="#" onClick={p.qrcode}>我要开店</NavLink></NavItem>
        <NavItem><NavLink href="/">商家入驻</NavLink></NavItem>
	<NavItem><NavLink href="#" onClick={p.login}>商家后台</NavLink></NavItem>
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
