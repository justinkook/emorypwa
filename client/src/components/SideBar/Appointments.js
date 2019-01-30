import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import LabelBottomNavigation from '../material/BottomNav';
import ResponsiveDrawer from './TopNav';

const drawerWidth = 240;

const styles = theme => ({
    text: {
        fontFamily: "Roboto, Helvetica, Arial, sans-serif",
        marginTop: 150,
        padding: 20,
        [theme.breakpoints.up('sm')]: {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
        },
    }
})
class Insurance extends Component {

    render() {
        const { classes } = this.props;

        return (
            <div>
                <main>
                    <div className="content">
                        <ResponsiveDrawer title={'Appointments'} />
                    </div>
                    <div className={classes.text} >
                        <p>To make an appointment, please call
                            <br />
                            <a href={`tel:+14047787777`} aria-label={'+14047787777'} >
                                <strong>404-778-7777 </strong>
                            </a>
                            or
                            <a href={`tel:+18007536679`} aria-label={'+18007536679'} >
                                <strong> 800-753-6679</strong>
                            </a>
                            <br />
                            and speak with one of our&nbsp;HealthConnection<sup>sm&nbsp;</sup>registered nurses or representatives.</p>
                        <p><em>The HealthConnection Team is available Monday–Friday, from 7:30 a.m. to 6:00 p.m. EST.</em></p>
                        <p>They can answer almost any health related question. Plus, they can help you:</p>
                        <div className="row">
                            <div className="col-sm-6">
                                <ul>
                                    <li>Find a convenient location</li>
                                    <li>Plan your first visit</li>
                                    <li>Find the right physician&nbsp;</li>
                                </ul>
                            </div>
                            <div className="col-sm-6">
                                <ul>
                                    <li>Obtain a referral to an Emory physician</li>
                                    <li>Register for classes and events</li>
                                    <li>Interpret insurance coverage &nbsp;&nbsp;</li>
                                </ul>
                            </div>
                        </div>
                        <span>Emory Healthcare&nbsp;is pleased to have the opportunity to serve you. Thank you for&nbsp;entrusting your care to us.&nbsp;</span>
                    </div>
                    <LabelBottomNavigation value={'appointments'} />
                </main>
            </div>
        )
    }
}

Insurance.propTypes = {
    classes: PropTypes.object.isRequired,
    container: PropTypes.object,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Insurance);
