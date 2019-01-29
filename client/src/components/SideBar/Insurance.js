import React, { Component } from 'react';
import axios from 'axios';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeftOutlined';
import { Link } from 'react-router-dom';
import './insurance.css';
import InsuranceSearch from './InsuranceSearchBar';

const styles = {
    paper: {
        padding: '2px 0 4px 0',
        display: 'flex',
        alignItems: 'center',
        maxWidth: 350,
        justifyContent: 'center',
        borderRadius: 6 + 'px',
        margin: '20px',
        background: 'white',
        position: 'sticky',
        top: 10,
        width: 85 + '%',
    },
    leftArrow: {
        fill: 'rgb(6, 47, 94)',
        fontSize: 30
    },
}

class Insurance extends Component {
    state = {
        insuranceList: [],
        completeList: [],
        inputFilter: ''
    }

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

    getInsuranceList = () => {
        axios.get('/api/insurance')
            .then(response => {
                this.setState({ completeList: response.data })
                this.setState({ insuranceList: response.data })
            });
    }

    render() {
        return (
            <div>
                <main>
                    <div className="content">
                        <Link to={`/`} style={{ display: 'flex', padding: '0 20px 0 20px' }} >
                            <KeyboardArrowLeft style={styles.leftArrow} />
                        </Link>
                        <form className="inputWithIcon" onSubmit={event => this.submitFilterList(event)} >
                            <InsuranceSearch value={this.state.inputFilter} onChange={this.handleInputChange} />
                            <input type='submit' className='hidden' />
                        </form>
                        <h6>Accepted Insurance</h6>
                    </div>
                    <table id="listArea">
                        {this.state.insuranceList.map((e, i) => (<tbody key={i} ><tr><td>{e.name}</td></tr></tbody>))}
                    </table>
                </main>
            </div>
        )
    }
}

export default Insurance;
