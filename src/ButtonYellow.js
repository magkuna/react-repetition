import React from 'react'

import {button, buttonYellow} from './button.styles.js'

const ButtonYellow = (props) => (
    <div
        style={{
            ...button,
            ...buttonYellow
        }}
    >
        Button Yellow
    </div>
)

export default ButtonYellow

