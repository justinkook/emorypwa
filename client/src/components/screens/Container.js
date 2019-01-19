import React from 'react';
import GoogleApiComponent from '../utils/GoogleApiComponent';
import Map from './Map';
import Paper from '@material-ui/core/Paper';
import ResultsCard from '../material/ResultsCard';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeftOutlined';
import { Link } from 'react-router-dom';

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
    },
    ResultsCard: {
        position: 'fixed',
        bottom: 0
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
    }
}

class Container extends React.Component {
    render() {
        return (
            <div >
                <Paper style={styles.paper}>
                    <IconButton style={styles.iconButton} aria-label="Search">
                        <Link to={`/`} style={{ display: 'flex' }} >
                            <KeyboardArrowLeft style={styles.leftArrow} />
                        </Link>
                    </IconButton>
                    <InputBase style={styles.input} placeholder="Search by Zip Code" required={true} autoComplete="shipping postal-code" type='tel' />
                    <IconButton style={styles.iconButton} aria-label="LocationServices">
                        <CloseIcon />
                    </IconButton>
                </Paper>
                <div style={styles.ResultsCard}>
                    <ResultsCard />
                </div>
                <Map google={this.props.google} />
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