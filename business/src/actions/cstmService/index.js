//


export const ACCESSTAB = "ACCESSTAB"
export const OMANAGERTAB = "OMANAGERTAB"
export const IMANAGERTAB = "IMANAGERTAB"
export const PMANAGERTAB = 'PMANAGERTAB'

export const switchAccessTab = reddit => ({
    type:ACCESSTAB,
    reddit
})

export const switchOmanagerTab = reddit =>({
    type: OMANAGERTAB,
    reddit
})

export const switchImanagerTab = reddit =>({
    type: IMANAGERTAB,
    reddit
})

export const switchPmanagerTab = reddit =>({
    type: PMANAGERTAB,
    reddit
})

