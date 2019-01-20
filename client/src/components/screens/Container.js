import React from 'react';
import GoogleApiComponent from '../utils/GoogleApiComponent';
import Map from './Map';
import Paper from '@material-ui/core/Paper';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ComplexGrid from '../material/ComplexGrid';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeftOutlined';
import { Link } from 'react-router-dom';

const rehabList = [
    {
        title: 'Center for Rehabilitation Medicine',
        phone: '706-728-0283',
        email: 'justinkook@gmail.com',
    },
    {
        title: 'Dekalb',
        phone: '706-728-0283',
        email: 'justinkook@gmail.com',
    },
    {
        title: 'Dekalb',
        phone: '706-728-0283',
        email: 'justinkook@gmail.com',
    },
    {
        title: 'Dekalb',
        phone: '706-728-0283',
        email: 'justinkook@gmail.com',
    },
    {
        title: 'Dekalb',
        phone: '706-728-0283',
        email: 'justinkook@gmail.com',
    },
    {
        title: 'Dekalb',
        phone: '706-728-0283',
        email: 'justinkook@gmail.com',
    },
    {
        title: 'Dekalb',
        phone: '706-728-0283',
        email: 'justinkook@gmail.com',
    },
    {
        title: 'Dekalb',
        phone: '706-728-0283',
        email: 'justinkook@gmail.com',
    },
]

const styles = {
    paper: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        maxWidth: 350,
        justifyContent: 'center',
        borderRadius: 6 + 'px',
        margin: '20px',
        background: 'white',
        position: 'fixed',
        top: 10,
        width: 85 + '%',
    },
    ResultsCard: {
        position: 'relative',
        width: 100 + '%',
        maxWidth: 500,
        zIndex: 400,
    },
    heading: {
        color: 'rgb(6, 67, 94)',
    },
    details: {
        textAlign: 'left',
        display: 'block',
    },
    minHeight: {
        minHeight: 60 + 'vh',
        flexDirection: 'column',
    },
    column: {
        flexBasis: '100%',
    },
    input: {
        flex: 1,
        color: 'rgb(6, 47, 94)',
    },
    iconButton: {
        padding: 10,
        color: 'rgb(6, 47, 94)',
    },
    divider: {
        width: 1,
        height: 28,
        margin: 4,
    },
    leftArrow: {
        fill: 'rgb(6, 47, 94)',
        fontSize: 30
    },
    flex: {
        display: 'flex',
    },
    map: {
        position: 'fixed',
        zIndex: -100,
    },
    sticky: {
        position: 'sticky',
        top: 0,
        background: 'white',
        padding: '0 14px 0 14px',
        boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)'
    },
    paddingTop: {
        paddingTop: 4,
        paddingLeft: 10
    }
}

class Container extends React.Component {
    state = {
        resultsList: [],
        locationInput: '',
        searchTerm: '',
    }

    componentDidMount = () => {
        let localList = localStorage.getItem('resultsList');
        (!localList) ? this.getSearchResults() : this.setState({ resultsList: localList });
    }

    getSearchResults = () => {
        this.setState({ resultsList: rehabList });
        localStorage.setItem('resultsList', rehabList);
    }

    render() {
        return (
            <div >
                <div style={styles.map}>
                    <Map google={this.props.google} />
                </div>
                <div style={styles.ResultsCard}>
                    <ExpansionPanel >
                        <ExpansionPanelSummary style={styles.sticky} expandIcon={<ExpandMoreIcon />}>
                            <Link to={`/`} style={{ display: 'flex' }} >
                                <KeyboardArrowLeft style={styles.leftArrow} />
                            </Link>
                            <div className={styles.column}>
                                <Typography variant="title" style={styles.paddingTop} className={styles.heading}>Therapy Clinics</Typography>
                            </div>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails style={styles.minHeight} className={styles.details}>
                            {rehabList.map(e => (
                                <ComplexGrid title={`${e.title}`} phone={`${e.phone}`} email={`${e.email}`} />
                            ))}
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </div>
            </div>
        );
    }
}

const Loading = () => <div>Fancy loading container</div>;

export default GoogleApiComponent({
    apiKey: 'AIzaSyCFA-SqdzzXS4HC_kujnGLRSIW1-rgkjqk',
    libraries: ['places', 'visualization'],
    LoadingContainer: Loading
})(Container);