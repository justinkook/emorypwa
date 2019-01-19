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

const drawerWidth = 240;

const styles = theme => ({
  root: {
    width: '100%',
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
    background: 'white',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    color: 'rgb(6, 67, 94)'
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
  font: {
    fontSize: 16,
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

const clinics = () => {
  localStorage.setItem('searchTerm', 'clinics');
}

const nursing = () => {
  localStorage.setItem('searchTerm', 'nursing');
}

const rehab = () => {
  localStorage.setItem('searchTerm', 'rehab');
}

const ltach = () => {
  localStorage.setItem('searchTerm', 'ltach');
}

function DetailedExpansionPanel(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <ExpansionPanel >
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
          <Button size="small" color="primary">
            <Link to={`/search`} style={{ color: '#3f51b5', textDecoration: 'none' }} onClick={clinics} >
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
        <ExpansionPanelDetails className={classes.details}>
        </ExpansionPanelDetails>
        <Divider />
        <ExpansionPanelActions>
          <Button size="small" color="primary">
            <Link to={`/search`} style={{ color: '#3f51b5', textDecoration: 'none' }} onClick={nursing}>
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
          <ComplexGrid title1='Center for Rehabilitation Medicine' title2='Dekalb' phone1='706-728-0283' phone2='706-728-0283' email1='justinkook@gmail.com' email2='justinkook@gmail.com' />
        </ExpansionPanelDetails>
        <Divider />
        <ExpansionPanelActions>
          <Button size="small" color="primary">
            <Link to={`/search`} style={{ color: '#3f51b5', textDecoration: 'none' }} onClick={rehab}>
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
          <ComplexGrid title1='Emory Decatur | LTACH' title2='Emory & Select' phone1='706-728-0283' phone2='706-728-0283' email1='justinkook@gmail.com' email2='justinkook@gmail.com' />
        </ExpansionPanelDetails>
        <Divider />
        <ExpansionPanelActions>
          <Link to={`/search`} style={{ color: '#3f51b5', textDecoration: 'none' }} onClick={ltach} >
            <Button size="small" color="primary">Map View</Button>
          </Link>
        </ExpansionPanelActions>
      </ExpansionPanel>
    </div>
  );
}

DetailedExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DetailedExpansionPanel);