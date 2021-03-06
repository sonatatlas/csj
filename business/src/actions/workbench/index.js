

import { AsyncStorage } from 'react-native'
import { SERVER } from 'init'

export const ITEMTAB = "ITEMTAB"
export const UPDATE = "UPDATE"
export const UPDATECATEGORIES = "UPDATECATEGORIES"
export const UPDATEITEMS = "UPDATEITEMS"

export const switchTab = reddit =>({
    type: ITEMTAB,
    reddit
})

export const updateInfo = reddit =>({
    type: UPDATE,
    reddit
})

export const updateItems = reddit =>({
    type: UPDATEITEMS,
    reddit
})

export const updateCategories = reddit =>({
    type: UPDATECATEGORIES,
    reddit
})


export const getCategories = async (dispatch) =>{
    try{
        let account = await AsyncStorage.getItem('account')
        let res = await fetch( SERVER + '/categories?account=' + account )
        let resJson = await res.json()
        await dispatch(updateCategories(resJson))
    }catch(error){
        console.log(error)
    }
}

export const getItems = async (dispatch) =>{
    try{
        let account = await AsyncStorage.getItem('account')
        let res = await fetch( SERVER + '/items?account=' + account )
        let resJson = await res.json()
        await dispatch(updateItems(resJson))
    }catch(error){
        console.log(error)
    }
}
