import * as styledSystem from 'styled-system'
import themeGet from '@styled-system/theme-get'
import { theme } from '../../../theme';

const { get: getKey, compose } = styledSystem

export const get = key => themeGet(key, getKey(theme, key))

//We use "system props" to apply a standard set of props to each component.

//The compose utility is used to combine multiple style functions together into one. 

//COMMON give the component access to color and space props
export const COMMON = compose(
    styledSystem.space,
    styledSystem.color,
    styledSystem.display
)

//BORDER give the component access to border and shadow props
export const BORDERS = compose(
    styledSystem.border,
    styledSystem.shadow
)

export const TYPOGRAPHY = styledSystem.typography
export const LAYOUT = styledSystem.layout
export const POSITION = styledSystem.position
export const FLEX = styledSystem.flexbox
export const GRID = styledSystem.grid