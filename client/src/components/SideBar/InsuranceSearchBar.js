import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const styles = {
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        maxWidth: 500,
        border: '2px solid rgb(6, 67, 94)',
        borderRadius: 6 + 'px',
        boxShadow: 'none',
    },
    input: {
        flex: 1,
        color: 'rgb(6, 47, 94)',
        paddingLeft: 10
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        width: 1,
        height: 28,
        margin: 4,
    },
};

function InsuranceSearch(props) {
    const { classes } = props;

    return (
        <Paper className={classes.root} elevation={1}>
            <IconButton className={classes.iconButton} aria-label="Search">
                <SearchIcon />
            </IconButton>
            <InputBase className={classes.input} placeholder="Search insurance" value={props.value} onChange={e => props.onChange(e)} />
        </Paper>
    );
}

InsuranceSearch.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InsuranceSearch);