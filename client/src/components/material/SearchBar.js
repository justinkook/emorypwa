import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import AlertDialog from '../material/AlertDialog';

const styles = {
    container: {
        display: 'flex'
    },
    input: {
        flex: 1,
        color: 'rgb(6, 47, 94)',
        paddingLeft: 10
    },
    iconButton: {
        padding: 10,
        color: 'rgb(6, 47, 94)',
        paddingRight: 0
    },
    divider: {
        width: 1,
        height: 28,
        margin: 4,
    },
};

function CustomizedInputBase(props) {
    const { classes } = props;

    return (
        <div style={styles.container}>
            <IconButton className={classes.iconButton} aria-label="Search">
                <SearchIcon />
            </IconButton>
            <InputBase className={classes.input} placeholder="Search by Zip Code" required={true} autoComplete="shipping postal-code" type='tel' />
            <IconButton className={classes.iconButton} aria-label="LocationServices">
                <AlertDialog />
            </IconButton>
        </div>
    );
}

CustomizedInputBase.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedInputBase);
