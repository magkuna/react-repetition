import React from 'react'

import {button, buttonGreen} from './button.styles.js'

const ButtonGreen = (props) => (
    <div
        style={{
            ...button,
            ...buttonGreen
        }}
    >
        Button Green
    </div>
)

export default ButtonGreen