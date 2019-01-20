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

const rehabList = [
  {
    title: 'Emory Rehabilitation Hospital',
    phone: '+14047127593',
    email: 'justinkook@gmail.com',
  },
  {
    title: 'Emory Dekalb Rehabilitation',
    phone: '+14045013646',
    email: 'justinkook@gmail.com',
  }
]

const ltachList = [
  {
    title: 'Emory Decatur | LTACH',
    phone: '+14045016226',
    email: 'justinkook@gmail.com',
  },
  {
    title: 'Emory & Select',
    phone: '+14044664600',
    email: 'justinkook@gmail.com',
  }
]

function DetailedExpansionPanel(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
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
          <Button size="small" color="primary">
            <Link to={`/search`} style={{ color: 'rgb(25, 103, 210)', textDecoration: 'none' }} onClick={clinics} >
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
          {rehabList.map(e => {
            return (
              <ComplexGrid title={`${e.title}`} phone={`${e.phone}`} email={`${e.email}`} />
            )
          })}
        </ExpansionPanelDetails>
        <Divider />
        <ExpansionPanelActions>
          <Button size="small" color="primary">
            <Link to={`/search`} style={{ color: 'rgb(25, 103, 210)', textDecoration: 'none' }} onClick={nursing}>
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
          {rehabList.map(e => (
            <ComplexGrid title={`${e.title}`} phone={`${e.phone}`} email={`${e.email}`} />
          ))}
        </ExpansionPanelDetails>
        <Divider />
        <ExpansionPanelActions>
          <Button size="small" color="primary">
            <Link to={`/search`} style={{ color: 'rgb(25, 103, 210)', textDecoration: 'none' }} onClick={rehab}>
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
          {ltachList.map(e => {
            return (
              <ComplexGrid title={`${e.title}`} phone={`${e.phone}`} email={`${e.email}`} />
            )
          })}
        </ExpansionPanelDetails>
        <Divider />
        <ExpansionPanelActions>
          <Button size="small" color="primary">
            <Link to={`/search`} style={{ color: 'rgb(25, 103, 210)', textDecoration: 'none' }} onClick={ltach} >
              Map View</Link>
          </Button>
        </ExpansionPanelActions>
      </ExpansionPanel>
    </div>
  );
}

DetailedExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DetailedExpansionPanel);