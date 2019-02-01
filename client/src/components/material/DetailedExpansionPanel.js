import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { ResultContext } from '../utils/ContextApi';
import HomeIcon from '@material-ui/icons/Home';
import LocalHospitalIcon from '@material-ui/icons/LocalHospitalOutlined';
import SpaIcon from '@material-ui/icons/Spa';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import StoreIcon from '@material-ui/icons/Store';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    background: 'rgba(6, 67, 134, 0)',
    marginBottom: 60
  },
  avatar: {
    margin: 15,
    marginLeft: 20,
    color: '#fff',
  },
  heading: {
    textAlign: 'left',
    fontSize: 30,
    fontWeight: 500,
    marginBottom: 20,
    paddingLeft: '0.3em',
    color: 'rgb(6, 67, 97)',
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: 'white',
    fontWeight: 400,
    paddingTop: 20,
    paddingLeft: 20,
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  h5: {
    lineHeight: 2.03,
    fontWeight: 'bold',
    fontSize: 38,
    color: 'white',
    paddingLeft: 20,
  },
  card: {
    background: '#0a28be',
    boxShadow: 'none',
    marginBottom: '0.8em'
  },
  title: {
    color: 'white',
    fontWeight: 400,
    paddingTop: 20,
    paddingLeft: 20,
    fontSize: 18
  }
});

function DetailedExpansionPanel(props) {
  const { classes } = props
  return (
    <ResultContext.Consumer>
      {context => (
        <div className={classes.root}>
          <React.Fragment>
            <Typography className={classes.heading} variant='title' >
              Search by
        </Typography>
            <Link to={`/search`} style={{ color: 'rgb(25, 103, 210)', textDecoration: 'none' }} onClick={() => context.handleSearchUpdate('Clinics')} >
              <Card className={classes.card}>
                <CardContent>
                  <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Therapy
        </Typography>
                  <Typography className={classes.h5} variant="h5" component="h2">
                    Clinics
        </Typography>
                  <StoreIcon className={classes.avatar} />
                </CardContent>
              </Card>
            </Link>

            <Link to={`/search`} style={{ color: 'rgb(25, 103, 210)', textDecoration: 'none' }} onClick={() => context.handleSearchUpdate('Nursing')}>
              <Card className={classes.card}>
                <CardContent>
                  <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Skilled
        </Typography>
                  <Typography className={classes.h5} variant="h5" component="h2">
                    Nursing
        </Typography>
                  <HomeIcon className={classes.avatar} />
                </CardContent>
              </Card>
            </Link>

            <Link to={`/search`} style={{ color: 'rgb(25, 103, 210)', textDecoration: 'none' }} onClick={() => context.handleSearchUpdate('Rehabilitation')}>
              <Card className={classes.card}>
                <CardContent>
                  <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Acute
        </Typography>
                  <Typography className={classes.h5} variant="h5" component="h2">
                    Rehabilitation
        </Typography>
                  <LocalHospitalIcon className={classes.avatar} />
                </CardContent>
              </Card>
            </Link>

            <Link to={`/search`} style={{ color: 'rgb(25, 103, 210)', textDecoration: 'none' }} onClick={() => context.handleSearchUpdate('LTACH')} >
              <Card className={classes.card}>
                <CardContent>
                  <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Long Term
        </Typography>
                  <Typography className={classes.h5} variant="h5" component="h2">
                    Acute Hospitals
        </Typography>
                  <SpaIcon className={classes.avatar} />
                </CardContent>
              </Card>
            </Link>

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