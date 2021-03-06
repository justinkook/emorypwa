import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import PhoneIcon from '@material-ui/icons/Phone'
import DirectionsIcon from '@material-ui/icons/Directions'

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  phone: {
    paddingTop: '6%',
    paddingLeft: 2,
    color: '#0a28be',
    margin: 10
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline'
    }
  }
})

function ComplexGrid (props) {
  const { classes } = props
  return (
    <div className={classes.root}>
      <br />
      <Grid container spacing={16}>
        <Grid item xs={12} sm container>
          <Grid item xs container direction='column' spacing={16}>
            <Grid item xs>
              <Typography gutterBottom variant='subtitle1'>
                {props.name}
              </Typography>
              <Typography color='textSecondary' gutterBottom>
                {props.location1}
              </Typography>
              <Typography color='textSecondary' gutterBottom>
                {props.location2}
              </Typography>
              <Typography color='textSecondary' gutterBottom>{`${
                props.distance
              } miles away`}</Typography>
            </Grid>
          </Grid>
          <Grid item className={classes.phone}>
            <a
              href={`tel:${props.phone}`}
              className={classes.link}
              aria-label={props.phone}
            >
              {<PhoneIcon />}
              <Typography className={classes.link}>CALL</Typography>
            </a>
          </Grid>
          <Grid item className={classes.phone}>
            <a
              href={`${props.directions}`}
              className={classes.link}
              aria-label={props.directions}
            >
              {<DirectionsIcon />}
              <Typography className={classes.link}>GO</Typography>
            </a>
          </Grid>
        </Grid>
      </Grid>
      <br />
    </div>
  )
}

ComplexGrid.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ComplexGrid)
