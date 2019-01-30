import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconAvatars from '../material/IconAvatars';

const styles = theme => ({
    root: {
        position: 'absolute',
        bottom: 0,
        zIndex: 99,
        width: '100%',
        maxWidth: 500,
    },
    center: {
        justifyContent: 'center',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        color: 'rgb(6, 67, 134)',
        textAlign: 'center',
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    icon: {
        verticalAlign: 'bottom',
        height: 20,
        width: 20,
    },
    details: {
        textAlign: 'left',
        display: 'block',
    },
});

function DetailedExpansionPanel(props) {
    const { classes } = props
    return (
        <div className={classes.root}>
            <ExpansionPanel >
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <div className={classes.column} style={{ paddingRight: 0 }} >
                        <Typography variant="title" className={classes.heading}>Filter by Specialty</Typography>
                    </div>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={classes.details}>
                    <IconAvatars />
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    );
}

DetailedExpansionPanel.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DetailedExpansionPanel);