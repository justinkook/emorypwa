import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import AlertDialog from '../material/AlertDialog';
import { ResultContext } from '../utils/ContextApi';
import { Redirect } from 'react-router-dom';

const styles = {
    container: {
        display: 'flex',
        width: 100 + '%',
        alignItems: 'center'
    },
    input: {
        flex: 1,
        color: 'rgb(6, 47, 94)',
        paddingLeft: 10,
        width: '100%'
    },
    iconButton: {
        padding: 10,
        color: 'rgb(6, 47, 94)',
        paddingRight: 0
    },
};

function CustomizedInputBase(props) {
    const { classes, context } = props;

    if (context.state.confirmGetAll) {
        return <Redirect to={'/search'} />
    }
    return (
        <ResultContext.Consumer>
            {context => (
                <div style={styles.container}>
                    <IconButton className={classes.iconButton} aria-label="Search" >
                        <SearchIcon />
                    </IconButton>
                    <form onSubmit={(e) => context.handleGetAll(e)} >
                        <InputBase className={classes.input} placeholder="Search by Zip Code" autoComplete="shipping postal-code"
                            aria-label="Search by Zip Code" value={context.state.locationInput}
                            required={true}
                            onChange={e => context.handleLocationUpdate(e)}
                        />
                    </form>
                    <AlertDialog className={classes.iconButton} context={context} />
                </div>
            )}
        </ResultContext.Consumer>
    );
}

CustomizedInputBase.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedInputBase);
