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
                        <form className="inputWithIcon" onSubmit={event => this.submitFilterList(event)} >
                            <ResponsiveDrawer value={this.state.inputFilter} onChange={this.handleInputChange} />
                            <input type='submit' className='hidden' />
                        </form>
                    </div>
                    <table id="listArea" className={classes.table}>
                        {this.state.insuranceList.map((e, i) => (<tbody key={i} ><tr><td>{e.name}</td></tr></tbody>))}
                    </table>
                    <LabelBottomNavigation value={'insurance'} />
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
