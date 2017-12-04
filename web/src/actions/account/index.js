

export const TOGGLELOGIN = 'TOGGLELOGIN'
export const QRCODE = 'QRCODE'


export const toggleQRcode = reddit =>({
    type: QRCODE,
    reddit
})


export const toggleLogin = reddit =>({
    type: TOGGLELOGIN,
    reddit
})

