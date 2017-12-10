
export const TOGGLE = 'TOGGLE'
export const SCROLL = 'SCROLL'
export const QRCODE = 'QRCODE'
export const SHOPCODE = 'SHOPCODE'

export const toggleQRcode = reddit =>({
    type: QRCODE,
    reddit
})

export const toggleShopCode = reddit =>({
    type: SHOPCODE,
    reddit
})

export const toggleNavBar = reddit =>({
    type: TOGGLE,
    reddit
})

export const scrollWindow = reddit =>({
    type: SCROLL,
    reddit
})

