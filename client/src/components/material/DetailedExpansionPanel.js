import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import { ResultContext } from '../utils/ContextApi';
import FullWidthTabs from './NursingTab';
import HomeIcon from '@material-ui/icons/Home';
import Avatar from '@material-ui/core/Avatar';
import LocalHospitalIcon from '@material-ui/icons/LocalHospitalOutlined';
import SpaIcon from '@material-ui/icons/SpaOutlined';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    background: 'rgba(6, 67, 134, 0)',
  },
  avatar: {
    margin: 15,
    marginLeft: '35.5vw',
    color: '#fff',
    backgroundColor: 'rgb(0, 122, 255)',
  },
  skyAvatar: {
    margin: 15,
    marginLeft: '35.5vw',
    color: '#fff',
    backgroundColor: 'rgb(90, 200, 250)'
  },
  greenAvatar: {
    margin: 15,
    marginLeft: '35.5vw',
    color: '#fff',
    backgroundColor: 'rgb(76, 217, 100)'
  },
  hidden: {
    display: 'none',
  },
  center: {
    justifyContent: 'center',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    color: 'rgb(6, 67, 134)',
    textAlign: 'center',
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20,
  },
  details: {
    textAlign: 'left',
    display: 'block',
  },
  detailsNursing: {
    padding: 0,
    textAlign: 'left',
    display: 'block',
  },
  font: {
    fontSize: 18,
  },
  column: {
    flexBasis: '100%',
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
});

function DetailedExpansionPanel(props) {
  const { classes } = props
  return (
    <ResultContext.Consumer>
      {context => (
        <div className={classes.root}>
          <React.Fragment>
            <ExpansionPanel defaultExpanded >
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <div className={classes.column} style={{ paddingRight: 0 }} >
                  <Typography variant="title" className={classes.heading}>Therapy Clinics</Typography>
                </div>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={classes.details}>
                {props.IconAvatars}
              </ExpansionPanelDetails>
              <Divider />
              <ExpansionPanelActions className={classes.center}>
                <Button size="small" color="primary" aria-label="Clinics" >
                  <Link to={`/search`} style={{ color: 'rgb(25, 103, 210)', textDecoration: 'none' }} onClick={() => context.handleSearchUpdate('Clinics')} >
                    Search Clinics
                </Link>
                </Button>
              </ExpansionPanelActions>
            </ExpansionPanel>

            <ExpansionPanel >
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon className={classes.hidden} />}>
                <div className={classes.column} style={{ paddingRight: 0 }} >
                  <Avatar className={classes.avatar}>
                    <HomeIcon />
                  </Avatar>
                  <Typography variant="title" className={classes.heading}>Skilled Nursing Homes</Typography>
                </div>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={classes.detailsNursing}>
                <FullWidthTabs />
              </ExpansionPanelDetails>
              <Divider />
              <ExpansionPanelActions className={classes.center} >
                <Button size="small" color="primary" aria-label="Nursing" >
                  <Link to={`/search`} style={{ color: 'rgb(25, 103, 210)', textDecoration: 'none' }} onClick={() => context.handleSearchUpdate('Nursing')}>
                    Search Nursing
                  </Link>
                </Button>
              </ExpansionPanelActions>
            </ExpansionPanel>

            <ExpansionPanel defaultExpanded >
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon className={classes.hidden} />}>
                <div className={classes.column} style={{ paddingRight: 0 }} >
                  <Avatar className={classes.skyAvatar}>
                    <LocalHospitalIcon />
                  </Avatar>
                  <Typography variant="title" className={classes.heading}>Acute Rehabilitation Hospitals</Typography>
                </div>
              </ExpansionPanelSummary>
              <Divider />
              <ExpansionPanelActions className={classes.center} >
                <Button size="small" color="primary" aria-label="Rehab" >
                  <Link to={`/search`} style={{ color: 'rgb(25, 103, 210)', textDecoration: 'none' }} onClick={() => context.handleSearchUpdate('Rehab')}>
                    Search Rehab
                  </Link>
                </Button>
              </ExpansionPanelActions>
            </ExpansionPanel>
            <ExpansionPanel defaultExpanded >
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon className={classes.hidden} />}>
                <div className={classes.column} style={{ paddingRight: 0 }} >
                  <Avatar className={classes.greenAvatar}>
                    <SpaIcon />
                  </Avatar>
                  <Typography variant="title" className={classes.heading}>Long Term Acute Hospitals</Typography>
                </div>
              </ExpansionPanelSummary>
              <Divider />
              <ExpansionPanelActions className={classes.center} >
                <Button size="small" color="primary" aria-label="LTACH" >
                  <Link to={`/search`} style={{ color: 'rgb(25, 103, 210)', textDecoration: 'none' }} onClick={() => context.handleSearchUpdate('LTACH')} >
                    Search LTACH</Link>
                </Button>
              </ExpansionPanelActions>
            </ExpansionPanel>
          </React.Fragment>
        </div>
      )}
    </ResultContext.Consumer>
  );
}

DetailedExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DetailedExpansionPanel);