import React from 'react';
import GoogleApiComponent from '../utils/GoogleApiComponent';
import Map from './Map';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ComplexGrid from '../material/ComplexGrid';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeftOutlined';
import { Link } from 'react-router-dom';
import LinearDeterminate from '../material/Loading';

let Loading = () => <div><LinearDeterminate className={styles.loading} /></div>;

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
        minHeight: 60 + 'vh',
        flexDirection: 'column',
        paddingTop: 70,
    },
    column: {
        flexBasis: '100%',
        paddingTop: 4,
        marginLeft: 32,
        position: 'absolute',
        textAlign: 'center',
        left: 10 + '%',
        right: 10 + '%',
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
    map: {
        position: 'fixed',
        zIndex: 1,
    },
    sticky: {
        position: 'fixed',
        top: 0,
        width: 100 + '%',
        maxWidth: 500,
        padding: 0,
        height: 70,
        background: 'white',
        boxShadow: '0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)'
    },
    loading: {
        position: 'absolute',
        bottom: 20,
    }
}

class Container extends React.Component {
    state = {
        resultsList: [],
        locationInput: '',
        searchTerm: '',
    }

    componentDidMount = () => {
        Loading = null;
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
                        <ExpansionPanelSummary style={styles.sticky} expandIcon={<ExpandMoreIcon style={styles.heading} />}>
                            <Link to={`/`} style={{ display: 'flex', padding: '0 20px 0 20px' }} >
                                <KeyboardArrowLeft style={styles.leftArrow} />
                            </Link>
                            <div style={styles.column}>
                                <Typography variant="title" style={styles.heading}>Therapy Clinics</Typography>
                            </div>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails style={styles.details}>
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

export default GoogleApiComponent({
    apiKey: 'AIzaSyCFA-SqdzzXS4HC_kujnGLRSIW1-rgkjqk',
    LoadingContainer: Loading
})(Container);