
import React from 'react'

import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core'

const styles = {
    button: {
        margin: 20
    },
    black: {
        backgroundColor: 'black',
        color: 'white'
    }

}

const MUIButton = (props) => { 

const { classes } = props
return (
    <div>
        <Button
            variant={'contained'}
            className={classes.button + ' ' + classes.black}
        >
            MUIButton
        </Button>
        <Button
            variant={'contained'}
            color={'secondary'}
        >
            MUIButton
        </Button>
    </div>
)
}

export default withStyles(styles)(MUIButton)