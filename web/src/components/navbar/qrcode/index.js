import React from 'react';
import {
    Button, Modal, ModalHeader, ModalBody, ModalFooter,Media,
    Label,Input,Form,FormGroup
} from 'reactstrap';

import $ from 'jquery'
const LoginModal = ({isQRcode,qrcode}) =>(
	<div>
        <Modal isOpen={isQRcode} toggle={qrcode} >
        <ModalHeader toggle={qrcode}>扫描二维码进入小程序</ModalHeader>
        <ModalBody className="text-center">
	<img src="http://192.168.1.105:6262/logo/qrcode.jpg" className="qrcode" alt="no img show"/>
        </ModalBody>
        <ModalFooter>
        <Button color="secondary" onClick={qrcode}>关闭</Button>
        </ModalFooter>
        </Modal>
	</div>
)

export default LoginModal
