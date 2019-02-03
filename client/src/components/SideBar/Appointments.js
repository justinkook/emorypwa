import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import LabelBottomNavigation from '../material/BottomNav'
import ResponsiveDrawer from './TopNav'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'

const drawerWidth = 240

const styles = theme => ({
  text: {
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
    marginTop: 4.6 + 'em',
    padding: 20,
    color: 'white',
    [theme.breakpoints.up('sm')]: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`
    }
  },
  h5: {
    lineHeight: 2.03,
    fontWeight: 'bold',
    fontSize: 30,
    color: 'white',
    paddingLeft: 20,
    display: 'inline-flex'
  },
  main: {
    marginBottom: '3.8em'
  },
  card: {
    background: 'rgb(6, 67, 134)',
    marginBottom: '0.8em'
  },
  cardContent: {
    padding: 0
  },
  title: {
    color: 'white',
    fontWeight: 400,
    paddingTop: 20,
    paddingLeft: 20,
    fontSize: 18
  },
  p: {
    color: 'white',
    padding: 20
  },
  cardActions: {
    background: 'white',
    justifyContent: 'center'
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'none'
    }
  }
})
class Insurance extends Component {
  render () {
    const { classes } = this.props

    return (
      <div>
        <main className={classes.main}>
          <div className='content'>
            <ResponsiveDrawer title={'Appointments'} />
          </div>
          <div className={classes.text}>
            <Card className={classes.card}>
              <CardContent
                style={{ paddingBottom: 0 }}
                className={classes.cardContent}
              >
                <Typography className={classes.title} color='textSecondary'>
                  Schedule
                </Typography>
                <Typography className={classes.h5} variant='h5' component='h2'>
                  Appointments
                </Typography>
                <Typography className={classes.p} component='p'>
                  To make an appointment, please call and speak with one of
                  our&nbsp;HealthConnection
                  <sup>sm&nbsp;</sup>
                  registered nurses or representatives.
                  <br />
                  <br />
                  <em>
                    The HealthConnection Team is available Monday–Friday, from
                    7:30 a.m. to 6:00 p.m. EST.
                  </em>
                  <br />
                  <br />
                  <span>
                    Emory Healthcare&nbsp;is pleased to have the opportunity to
                    serve you. Thank you for&nbsp;entrusting your care to
                    us.&nbsp;
                  </span>
                </Typography>
              </CardContent>
              <CardActions className={classes.cardActions}>
                <a
                  className={classes.link}
                  href={`tel:+14047787777`}
                  aria-label={'+14047787777'}
                >
                  <Button size='small' color='primary'>
                    Call
                  </Button>
                  <strong>(404) 778-7777 </strong>
                </a>
              </CardActions>
              <CardActions className={classes.cardActions}>
                <a
                  className={classes.link}
                  href={`tel:+18007536679`}
                  aria-label={'+18007536679'}
                >
                  <Button size='small' color='primary'>
                    Call
                  </Button>
                  <strong> (800) 753-6679</strong>
                </a>
              </CardActions>
            </Card>

            <Card className={classes.card}>
              <CardContent
                style={{ paddingBottom: 0 }}
                className={classes.cardContent}
              >
                <Typography className={classes.title} color='textSecondary'>
                  Emory
                </Typography>
                <Typography className={classes.h5} variant='h5' component='h2'>
                  Patient Portal
                </Typography>
              </CardContent>
              <CardActions className={classes.cardActions}>
                <a
                  className={classes.link}
                  href={`https://www.emoryhealthcare.org/patient-portal/index.html`}
                  aria-label={'Emory Patient Portal'}
                >
                  <Button size='small' color='primary'>
                    Log In
                  </Button>
                </a>
              </CardActions>
            </Card>
          </div>
          <LabelBottomNavigation value={'appointments'} />
        </main>
      </div>
    )
  }
}

Insurance.propTypes = {
  classes: PropTypes.object.isRequired,
  container: PropTypes.object,
  theme: PropTypes.object.isRequired
}

export default withStyles(styles, { withTheme: true })(Insurance)
