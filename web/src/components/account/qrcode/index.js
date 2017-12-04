import React from 'react';
import {
    Button, Modal, ModalHeader, ModalBody, ModalFooter,
} from 'reactstrap';

import './index.css'

const QRcodeModal = ({isQRcode,toggleQRcode}) =>(
	<div>
        <Modal className="ctnr" isOpen={isQRcode} toggle={toggleQRcode} >
        <ModalHeader toggle={toggleQRcode}>扫描二维码进入小程序</ModalHeader>
        <ModalBody className="ctnr">
	<img src="http://192.168.1.105:6262/logo/qrcode.jpg" className="qrcode" alt="no img show"/>
        </ModalBody>
        <ModalFooter>
        <Button color="secondary" onClick={toggleQRcode}>关闭</Button>
        </ModalFooter>
        </Modal>
	</div>
)

export default QRcodeModal
