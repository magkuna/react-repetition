import React from 'react'

import {button, buttonRed} from './button.styles.js'


const ButtonRed = (props) => (
    <div
        style={{
            ...button,
            ...buttonRed
        }}
    >
        Button Red
    </div>
)

export default ButtonRed

