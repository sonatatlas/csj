
export const ITEMTAB = "ITEMTAB"
export const UPLOAD = "UPLOAD"


export const switchTab = reddit =>({
    type: ITEMTAB,
    reddit
})

export const updateInfo = reddit =>({
    type: UPLOAD,
    reddit
})
