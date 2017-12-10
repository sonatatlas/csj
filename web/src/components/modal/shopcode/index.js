import React from 'react';
import {
    Modal, ModalHeader, ModalBody
} from 'reactstrap';

import './index.css'

const ShopCodeModal = ({isShopCode,toggleShopCode}) =>(
	<div>
        <Modal isOpen={isShopCode} toggle={toggleShopCode} style={{width:'25rem'}}>
        <ModalHeader toggle={toggleShopCode} />
        <ModalBody className="ctnr text-center mb-3">
	<div>扫描二维码, 下载「草市集」商家客户端</div>
	<img src="http://wanxiaoo.cn:6262/logo/qrcode.jpg" className="qrcode mt-5 mb-5" alt="no img show"/>
	<div>「草市集」商家客户端</div>
	<div className="mt-1">帮助您管理您的「草市集」个人店铺</div>	
        </ModalBody>
        </Modal>
	</div>
)

export default ShopCodeModal
