

import { SERVER } from 'init'

export const SELECTCATEGORY = "SELECTCATEGORY"

export const selectCategory = reddit =>({
    type: SELECTCATEGORY,
    reddit
})

