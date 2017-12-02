
export const TOGGLE = 'TOGGLE'
export const LOGIN = 'LOGIN'
export const SHOWLOGIN = 'SHOWLOGIN'
export const SETUP = 'SETUP'

export const toggleNavBar = reddit =>({
    type: TOGGLE,
    reddit
})

export const tapLogin = reddit =>({
    type:LOGIN,
    reddit
})

export const showLogin = reddit =>({
    type: SHOWLOGIN,
    reddit
})

export const toggleQRcode = reddit =>({
    type: SETUP,
    reddit
})
