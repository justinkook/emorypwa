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
import ComplexGrid from './ComplexGrid';
import { ResultContext } from '../utils/ContextApi';
import FullWidthTabs from './NursingTab';

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
  heading: {
    fontSize: theme.typography.pxToRem(15),
    color: 'rgb(6, 67, 134)'
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
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
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
                <div className={classes.column}>
                  <Typography variant="title" className={classes.heading}>Therapy Clinics</Typography>
                </div>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={classes.details}>
                {props.IconAvatars}
              </ExpansionPanelDetails>
              <Divider />
              <ExpansionPanelActions>
                <Button size="small" color="primary" aria-label="Clinics" >
                  <Link to={`/search`} style={{ color: 'rgb(25, 103, 210)', textDecoration: 'none' }} onClick={() => context.handleSearchUpdate('Clinics')} >
                    Search Clinics
                </Link>
                </Button>
              </ExpansionPanelActions>
            </ExpansionPanel>

            <ExpansionPanel >
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <div className={classes.column}>
                  <Typography variant="title" className={classes.heading}>Skilled Nursing Homes</Typography>
                </div>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={classes.detailsNursing}>
                <FullWidthTabs />
              </ExpansionPanelDetails>
              <Divider />
              <ExpansionPanelActions>
                <Button size="small" color="primary" aria-label="Nursing" >
                  <Link to={`/search`} style={{ color: 'rgb(25, 103, 210)', textDecoration: 'none' }} onClick={() => context.handleSearchUpdate('Nursing')}>
                    Search Nursing
                  </Link>
                </Button>
              </ExpansionPanelActions>
            </ExpansionPanel>

            <ExpansionPanel >
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <div className={classes.column}>
                  <Typography variant="title" className={classes.heading}>Acute Rehabilitation Hospitals</Typography>
                </div>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={classes.details}>
                {context.state.rehabList.map((e, i) => (
                  <div key={i} >
                    <ComplexGrid location1={e.location.display_address[0]} location2={e.location.display_address[1]} name={`${e.name}`} phone={`${e.phone}`} email={`${e.email}`} />
                  </div>
                ))}
              </ExpansionPanelDetails>
              <Divider />
              <ExpansionPanelActions>
                <Button size="small" color="primary" aria-label="Rehab" >
                  <Link to={`/search`} style={{ color: 'rgb(25, 103, 210)', textDecoration: 'none' }} onClick={() => context.handleSearchUpdate('Rehab')}>
                    Map View
                  </Link>
                </Button>
              </ExpansionPanelActions>
            </ExpansionPanel>
            <ExpansionPanel >
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <div className={classes.column}>
                  <Typography variant="title" className={classes.heading}>Long Term Acute Hospitals</Typography>
                </div>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={classes.details}>
                {context.state.ltachList.map((e, i) => (
                  <div key={i} >
                    <ComplexGrid location1={e.location.display_address[0]} location2={e.location.display_address[1]} name={`${e.name}`} phone={`${e.phone}`} email={`${e.email}`} />
                  </div>
                ))}
              </ExpansionPanelDetails>
              <Divider />
              <ExpansionPanelActions>
                <Button size="small" color="primary" aria-label="LTACH" >
                  <Link to={`/search`} style={{ color: 'rgb(25, 103, 210)', textDecoration: 'none' }} onClick={() => context.handleSearchUpdate('LTACH')} >
                    Map View</Link>
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