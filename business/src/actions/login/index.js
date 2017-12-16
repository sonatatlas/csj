import {
    AsyncStorage
} from 'react-native'


export const LOGIN = "LOGIN"
export const ACCOUNTANDPASSWD = "ACCOUNTANDPASSWD"


export const login = reddit => ({
    type:LOGIN,
    reddit
})

export const valueInput = reddit => ({
    type: ACCOUNTANDPASSWD,
    reddit
})



