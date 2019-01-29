import React, { Component } from 'react';
import axios from 'axios';
import SearchIcon from '@material-ui/icons/SearchOutlined';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeftOutlined';
import { Link } from 'react-router-dom';
import './insurance.css';

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
        inputFilter: ''
    }

    componentDidMount = () => {
        axios.get('/api/insurance')
            .then(response => {
                this.setState({ insuranceList: response.data })
            });
    }

    handleInputChange = (e) => {
        e.preventDefault();
        this.setState({ inputFilter: e.target.value });
    }

    submitFilterList = (e) => {
        e.preventDefault();
        const filteredList = this.state.insuranceList.filter(e => e.name.toLowerCase().includes(this.state.inputFilter.toLowerCase()));
        this.setState({ insuranceList: filteredList });
    }

    render() {
        return (
            <div>
                <main>
                    <div className="content">
                        <Link to={`/`} style={{ display: 'flex', padding: '0 20px 0 20px' }} >
                            <KeyboardArrowLeft style={styles.leftArrow} />
                        </Link>
                        <div className="inputWithIcon">
                            <SearchIcon />
                            <input id="inputCont" className="col lg 5" type="text" placeholder="Search Insurances" name="insuranceSearch" value={this.state.inputFilter} onChange={e => this.handleInputChange(e)} />
                            <input className="hidden" type="submit" />
                        </div>
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
