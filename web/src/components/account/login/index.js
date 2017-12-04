import React from 'react';
import {
    Button, Modal, ModalHeader, ModalBody, ModalFooter,
    Label,Input,Form,FormGroup
} from 'reactstrap';

import $ from 'jquery'
const LoginModal = ({isLogin,toggleLogin,completeLogin}) =>(
	<div>
        <Modal isOpen={isLogin} toggle={toggleLogin} >
        <ModalHeader toggle={toggleLogin}>请登录</ModalHeader>
        <ModalBody>
	<Form id="loginForm">
	<FormGroup><Label>用户名</Label><Input type="text" name="account" /></FormGroup>
	<FormGroup><Label>密码</Label><Input type="password" name="psw" /></FormGroup>	
	</Form>
        </ModalBody>
        <ModalFooter>
        <Button color="secondary" onClick={toggleLogin}>取消</Button>
        <Button color="primary"
    onClick={()=>{completeLogin($('#loginForm'))}}>登录</Button>
        </ModalFooter>
        </Modal>
	</div>
)

export default LoginModal
