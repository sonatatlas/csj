
export const NORMAL = "普通商品"
export const ABOARD = "海外商品"

export const UNITY = "统一规格"
export const MULTIPLE ="多种规格"

export const itemType = reddit =>({
	type: NORMAL,
	reddit
})

export const itemRank = reddit =>({
    type: UNITY,
    reddit
})
