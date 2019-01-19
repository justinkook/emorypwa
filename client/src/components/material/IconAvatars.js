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

const styles = {
    one: {
        margin: 3,
        backgroundColor: '#2185d0',
        color: '#fff',
    },
    two: {
        margin: 3,
        color: '#fff',
        backgroundColor: '#21ba45',
    },
    three: {
        margin: 3,
        color: '#fff',
        backgroundColor: '#db2828',
    },
    four: {
        margin: 3,
        backgroundColor: '#db9328',
        color: '#fff',
    },
    five: {
        margin: 3,
        color: '#fff',
        backgroundColor: '#28dbbd',
    },
    six: {
        margin: 3,
        color: '#fff',
        backgroundColor: '#bd28db',
    },
    seven: {
        margin: 3,
        color: '#fff',
        backgroundColor: '#eb2ddb',
    },
    eight: {
        margin: 3,
        color: '#fff',
        backgroundColor: '#000000',
    },
    margin: {
        margin: 15 + 'px',
        color: 'rgb(6, 47, 94)',
    },
    justify: {
        justifyContent: 'space-evenly',
        display: 'flex'
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

    const aquatic = () => {
        localStorage.setItem('searchTerm', 'aquatic');
    }

    const occupational = () => {
        localStorage.setItem('searchTerm', 'occupational');
    }

    const functional = () => {
        localStorage.setItem('searchTerm', 'functional');
    }

    const pelvic = () => {
        localStorage.setItem('searchTerm', 'pelvic');
    }

    const vestibular = () => {
        localStorage.setItem('searchTerm', 'vestibular');
    }

    const intramuscular = () => {
        localStorage.setItem('searchTerm', 'intramuscular');
    }

    const women = () => {
        localStorage.setItem('searchTerm', 'women');
    }

    const work = () => {
        localStorage.setItem('searchTerm', 'work');
    }

    const needling = () => {
        localStorage.setItem('searchTerm', 'needling');
    }
    return (
        <div style={styles.justify}>
            <Grid container justify="space-evenly" alignItems="center">
                <Link to={`/search`} style={styles.link} onClick={aquatic} >
                    <FormControlLabel
                        value="Aquatic"
                        control={<Avatar className={classes.one}>
                            <PoolIcon />
                        </Avatar>}
                        label="Aquatic"
                        labelPlacement="bottom"
                        className={classes.margin}
                    />
                </Link>
                <Link to={`/search`} style={styles.link} onClick={occupational} >
                    <FormControlLabel
                        value="Occupational"
                        control={<Avatar className={classes.two}>
                            <ThumbsUpAltIcon />
                        </Avatar>}
                        label="Occupational"
                        labelPlacement="bottom"
                        className={classes.margin}
                    />
                </Link>
                <Link to={`/search`} style={styles.link} onClick={functional} >
                    <FormControlLabel
                        value="Functional"
                        control={<Avatar className={classes.three}>
                            <FavoriteBorderIcon />
                        </Avatar>}
                        label="Functional"
                        labelPlacement="bottom"
                        className={classes.margin}
                    />
                </Link>
            </Grid>
            <Grid container justify="space-evenly" alignItems="center">
                <Link to={`/search`} style={styles.link} onClick={pelvic} >
                    <FormControlLabel
                        value="Pelvic"
                        control={<Avatar className={classes.five}>
                            <SeatIcon />
                        </Avatar>}
                        label="Pelvic"
                        labelPlacement="bottom"
                        className={classes.margin}
                    />
                </Link>
                <Link to={`/search`} style={styles.link} onClick={vestibular} >
                    <FormControlLabel
                        value="Vestibular"
                        control={<Avatar className={classes.six}>
                            <HearingIcon />
                        </Avatar>}
                        label="Vestibular"
                        labelPlacement="bottom"
                        className={classes.margin}
                    />
                </Link>
                <Link to={`/search`} style={styles.link} onClick={women} >
                    <FormControlLabel
                        value="Women"
                        control={<Avatar className={classes.seven}>
                            <NaturePeopleIcon />
                        </Avatar>}
                        label="Women's"
                        labelPlacement="bottom"
                        className={classes.margin}
                    />
                </Link>
            </Grid>
            <Grid container justify="space-evenly" alignItems="center">
                <Link to={`/search`} style={styles.link} onClick={intramuscular} >
                    <FormControlLabel
                        value="Intramuscular"
                        control={<Avatar className={classes.four}>
                            <FitnessCenterIcon />
                        </Avatar>}
                        label="Intramuscular"
                        labelPlacement="bottom"
                        className={classes.margin}
                    />
                </Link>
                <Link to={`/search`} style={styles.link} onClick={work} >
                    <FormControlLabel
                        value="Work"
                        control={<Avatar className={classes.eight}>
                            <WorkIcon />
                        </Avatar>}
                        label="Work"
                        labelPlacement="bottom"
                        className={classes.margin}
                    />
                </Link>
                <Link to={`/search`} style={styles.link} onClick={needling} >
                    <FormControlLabel
                        value="Dry Needling"
                        control={<Avatar className={classes.eight}>
                            <FormatIcon />
                        </Avatar>}
                        label="Dry Needling"
                        labelPlacement="bottom"
                        className={classes.margin}
                    />
                </Link>
            </Grid>
        </div>
    );
}

IconAvatars.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IconAvatars);