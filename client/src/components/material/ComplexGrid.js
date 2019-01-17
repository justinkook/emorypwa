import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Divider } from '@material-ui/core';

const styles = theme => ({
    root: {
        flexGrow: 1,
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
});

function ComplexGrid(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <Grid container spacing={16}>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={16}>
                        <Grid item xs>
                            <Typography gutterBottom variant="subtitle1">
                                {props.title1}
                            </Typography>
                            <Typography gutterBottom>Admissions</Typography>
                            <Typography color="textSecondary">
                                Telephone: <a href="#sub-labels-and-columns" className={classes.link}>
                                    {props.phone1} </a>
                            </Typography>
                            <Typography color="textSecondary">
                                Email: <a href="#sub-labels-and-columns" className={classes.link}>
                                    {props.email1} </a>
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
            <Grid container spacing={16}>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={16}>
                        <Grid item xs>
                            <Typography gutterBottom variant="subtitle1">
                                {props.title2}
                            </Typography>
                            <Typography gutterBottom>Admissions</Typography>
                            <Typography color="textSecondary">
                                Telephone: <a href="#sub-labels-and-columns" className={classes.link}>
                                    {props.phone2} </a>
                            </Typography>
                            <Typography color="textSecondary">
                                Email: <a href="#sub-labels-and-columns" className={classes.link}>
                                    {props.email2} </a>
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
        </div>
    );
}

ComplexGrid.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ComplexGrid);