import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import './insurance.css';
import LabelBottomNavigation from '../material/BottomNav';
import ResponsiveDrawer from './TopNav';

const drawerWidth = 240;

const styles = theme => ({
    table: {
        [theme.breakpoints.up('sm')]: {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
        },
    }
})
class Insurance extends Component {
    state = {
        isLoading: false,
        insuranceList: [],
        completeList: [],
        inputFilter: ''
    }

    signal = axios.CancelToken.source();

    componentDidMount = () => {
        this.getInsuranceList();
    }

    handleInputChange = async (event) => {
        event.preventDefault();
        await this.setState({ inputFilter: event.target.value });
        const filteredList = this.state.completeList.filter(e => e.name.toLowerCase().includes(this.state.inputFilter.toLowerCase()));
        await this.setState({ insuranceList: filteredList });
    }

    submitFilterList = (event) => {
        event.preventDefault();
        const filteredList = this.state.completeList.filter(e => e.name.toLowerCase().includes(this.state.inputFilter.toLowerCase()));
        this.setState({ insuranceList: filteredList });
    }

    getInsuranceList = async () => {
        try {
            this.setState({ isLoading: true });
            let response = await axios.get('/api/insurance', {
                cancelToken: this.signal.token,
            })
            this.setState({ completeList: response.data, isLoading: true })
            this.setState({ insuranceList: response.data })
        } catch (err) {
            if (axios.isCancel(err)) {
            } else {
                this.setState({ isLoading: false });
            }
        }
    }

    componentWillUnmount = () => {
        this.signal.cancel();
    }

    render() {
        const { classes } = this.props;

        return (
            <div>
                <main>
                    <div className="content">
                        To make an appointment, please call 404-778-7777 or 800-753-6679 and speak with one of our HealthConnectionsm registered nurses or representatives.

    The HealthConnection Team is available Monday–Friday, from 7:30 a.m. to 6:00 p.m. EST.

    They can answer almost any health related question. Plus, they can help you:

    Find a convenient location
    Plan your first visit
    Find the right physician
    Obtain a referral to an Emory physician
    Register for classes and events
    Interpret insurance coverage
    Emory Healthcare is pleased to have the opportunity to serve you. Thank you for entrusting your care to us.
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
