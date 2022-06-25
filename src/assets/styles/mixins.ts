import { css } from 'styled-components'
import { constants } from './constants'

const logoStyle = ()=> css`

    font-family: ${constants.logoFontFamily};
    font-size: ${constants.logoFontSize};
    line-height: ${constants.logoLineHeight};
    

`

export const mixins ={

    logoStyle,
    
}