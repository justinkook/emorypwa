import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import BeenHereIcon from '@material-ui/icons/BeenhereOutlined';
import InsertInvitation from '@material-ui/icons/InsertInvitationOutlined';
import SearchIcon from '@material-ui/icons/SearchOutlined';
import { Link } from 'react-router-dom';

const styles = theme => (
    {
        root: {
            boxShadow: '0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)',
            justifyContent: 'space-around',
            position: 'fixed',
            bottom: 0,
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                display: 'none'
            },
        },
        link: {
            color: theme.palette.primary.main,
            textDecoration: 'none',
            '&:hover': {
                textDecoration: 'underline',
            },
        },
    });

class LabelBottomNavigation extends React.Component {
    state = {
        value: 'search',
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <BottomNavigation value={value} onChange={this.handleChange} className={classes.root}>
                <Link to={`/insurance`} className={classes.link} >
                    <BottomNavigationAction label="Insurance" value="insurance" icon={<BeenHereIcon />} />
                </Link>
                <Link to={`/`} className={classes.link} >
                    <BottomNavigationAction label="Search" value="search" icon={<SearchIcon />} />
                </Link>
                <Link to={`/appointments`} className={classes.link} >
                    <BottomNavigationAction label="Appointments" value="appointments" icon={<InsertInvitation />} />
                </Link>
            </BottomNavigation>
        );
    }
}

LabelBottomNavigation.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LabelBottomNavigation);