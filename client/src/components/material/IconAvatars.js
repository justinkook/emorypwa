import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import PoolIcon from '@material-ui/icons/PoolOutlined';
import ThumbsUpAltIcon from '@material-ui/icons/ThumbUpAltOutlined';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import WorkIcon from '@material-ui/icons/WorkOutlineOutlined';
import HearingIcon from '@material-ui/icons/Hearing';
import SeatIcon from '@material-ui/icons/AirlineSeatReclineNormal';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FormatIcon from '@material-ui/icons/FormatStrikethrough';
import NaturePeopleIcon from '@material-ui/icons/NaturePeopleOutlined';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { ResultContext } from '../utils/ContextApi';

const styles = {
    one: {
        margin: 3,
        backgroundColor: 'rgb(255, 59, 48)',
        color: '#fff',
    },
    two: {
        margin: 3,
        color: '#fff',
        backgroundColor: 'rgb(255, 149, 0)',
    },
    three: {
        margin: 3,
        color: '#fff',
        backgroundColor: 'rgb(255, 204, 0)',
    },
    four: {
        margin: 3,
        backgroundColor: 'rgb(76, 217, 100)',
        color: '#fff',
    },
    five: {
        margin: 3,
        color: '#fff',
        backgroundColor: 'rgb(90, 200, 250)',
    },
    six: {
        margin: 3,
        color: '#fff',
        backgroundColor: 'rgb(0, 122, 255)',
    },
    seven: {
        margin: 3,
        color: '#fff',
        backgroundColor: 'rgb(88, 86, 214)',
    },
    eight: {
        margin: 3,
        color: '#fff',
        backgroundColor: 'rgb(255, 45, 85)',
    },
    nine: {
        margin: 3,
        color: '#fff',
        backgroundColor: 'rgb(6, 67, 134)',
    },
    margin: {
        margin: 10,
        color: 'rgb(6, 47, 94)',
    },
    justify: {
        justifyContent: 'space-evenly',
        display: 'flex',
    },
    link: {
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
};

function IconAvatars(props) {
    const { classes } = props;
    return (
        <ResultContext.Consumer>
            {context => (
                <div style={styles.justify}>
                    <Grid container spacing={8} justify="space-evenly" alignItems="center">
                        <Link to={`/search`} style={styles.link} onClick={() => context.handleSearchUpdate('functional')} >
                            <FormControlLabel
                                value="Functional"
                                control={<Avatar className={classes.one}>
                                    <FavoriteBorderIcon />
                                </Avatar>}
                                label="Functional"
                                labelPlacement="bottom"
                                className={classes.margin}
                            />
                        </Link>
                        <Link to={`/search`} style={styles.link} onClick={() => context.handleSearchUpdate('aquatic')} >
                            <FormControlLabel
                                value="Aquatic"
                                control={<Avatar className={classes.six}>
                                    <PoolIcon />
                                </Avatar>}
                                label="Aquatic"
                                labelPlacement="bottom"
                                className={classes.margin}
                            />
                        </Link>
                        <Link to={`/search`} style={styles.link} onClick={() => context.handleSearchUpdate('hand')} >
                            <FormControlLabel
                                value="Hand"
                                control={<Avatar className={classes.seven}>
                                    <ThumbsUpAltIcon />
                                </Avatar>}
                                label="Hand"
                                labelPlacement="bottom"
                                className={classes.margin}
                            />
                        </Link>
                    </Grid>
                    <Grid container spacing={8} justify="space-evenly" alignItems="center">
                        <Link to={`/search`} style={styles.link} onClick={() => context.handleSearchUpdate('intramuscular')} >
                            <FormControlLabel
                                value="Intramuscular"
                                control={<Avatar className={classes.two}>
                                    <FitnessCenterIcon />
                                </Avatar>}
                                label="Intramuscular"
                                labelPlacement="bottom"
                                className={classes.margin}
                            />
                        </Link>
                        <Link to={`/search`} style={styles.link} onClick={() => context.handleSearchUpdate('vestibular')} >
                            <FormControlLabel
                                value="Vestibular"
                                control={<Avatar className={classes.five}>
                                    <HearingIcon />
                                </Avatar>}
                                label="Vestibular"
                                labelPlacement="bottom"
                                className={classes.margin}
                            />
                        </Link>
                        <Link to={`/search`} style={styles.link} onClick={() => context.handleSearchUpdate('women')} >
                            <FormControlLabel
                                value="Women"
                                control={<Avatar className={classes.eight}>
                                    <NaturePeopleIcon />
                                </Avatar>}
                                label="Women's"
                                labelPlacement="bottom"
                                className={classes.margin}
                            />
                        </Link>
                    </Grid>
                    <Grid container spacing={8} justify="space-evenly" alignItems="center">
                        <Link to={`/search`} style={styles.link} onClick={() => context.handleSearchUpdate('pelvic')} >
                            <FormControlLabel
                                value="Pelvic"
                                control={<Avatar className={classes.three}>
                                    <SeatIcon />
                                </Avatar>}
                                label="Pelvic"
                                labelPlacement="bottom"
                                className={classes.margin}
                            />
                        </Link>
                        <Link to={`/search`} style={styles.link} onClick={() => context.handleSearchUpdate('work')} >
                            <FormControlLabel
                                value="Work"
                                control={<Avatar className={classes.four}>
                                    <WorkIcon />
                                </Avatar>}
                                label="Work"
                                labelPlacement="bottom"
                                className={classes.margin}
                            />
                        </Link>
                        <Link to={`/search`} style={styles.link} onClick={() => context.handleSearchUpdate('needling')} >
                            <FormControlLabel
                                value="Needling"
                                control={<Avatar className={classes.nine}>
                                    <FormatIcon />
                                </Avatar>}
                                label="Needling"
                                labelPlacement="bottom"
                                className={classes.margin}
                            />
                        </Link>
                    </Grid>
                </div>
            )}
        </ResultContext.Consumer>
    );
}

IconAvatars.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IconAvatars);