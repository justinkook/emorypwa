import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core';

const styles = theme => ({
    root: {
        flexGrow: 1,
        overflow: 'auto',
    },
    paper: {
        padding: theme.spacing.unit * 2,
        margin: 'auto',
        maxWidth: 500,
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
    link: {
        color: theme.palette.primary.main,
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
    overflow: {
        overflow: 'scroll'
    }
});

function ComplexGrid(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <Grid container spacing={16} className={classes.overflow}>
                <Grid item xs={12} sm container >
                    <Grid item xs container direction="column" spacing={16} >
                        <Grid item xs >
                            <Typography gutterBottom variant="subtitle1">
                                {props.title}
                            </Typography>
                            <Typography gutterBottom>Admissions</Typography>
                            <Typography color="textSecondary">
                                Telephone: <a href={`tel:+${props.phone}`} className={classes.link}>
                                    {props.phone} </a>
                            </Typography>
                            <Typography color="textSecondary">
                                Email: <a href={`mailto: ${props.email}`} className={classes.link}>
                                    {props.email} </a>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography style={{ cursor: 'pointer' }}></Typography>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle1"></Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Divider />
            <br />
        </div>
    );
}

ComplexGrid.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ComplexGrid);