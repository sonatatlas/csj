import React from 'react';
import {
    Modal, ModalHeader, ModalBody
} from 'reactstrap';

import './index.css'

const QRcodeModal = ({isQRcode,toggleQRcode}) =>(
	<div>
        <Modal isOpen={isQRcode} toggle={toggleQRcode} style={{width:'25rem'}}>
        <ModalHeader toggle={toggleQRcode} />
        <ModalBody className="ctnr text-center mb-3">
	<div>扫描二维码, 进入「草市集」小程序</div>
	<img src="http://wanxiaoo.cn:6262/logo/qrcode.jpg" className="qrcode mt-5 mb-5" alt="no img show"/>
	<div >「草市集」小程序</div>
	<div className="mt-1">帮助您在小程序中展示您的个人店铺</div>	
        </ModalBody>
        </Modal>
	</div>
)

export default QRcodeModal
