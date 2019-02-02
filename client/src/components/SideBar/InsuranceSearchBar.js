import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import InputBase from '@material-ui/core/InputBase'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import CloseIcon from '@material-ui/icons/CloseOutlined'

const styles = {
  container: {
    display: 'flex',
    width: 100 + '%',
    alignItems: 'center'
  },
  input: {
    flex: 1,
    color: 'rgb(6, 47, 94)',
    paddingLeft: 10
  },
  iconButton: {
    padding: 10,
    color: 'rgb(6, 47, 94)',
    paddingRight: 0
  },
  closeButton: {
    color: 'rgb(6, 47, 94)',
    marginRight: 15
  }
}

class InsuranceSearch extends Component {
  state = {
    onFocus: false
  }

  render () {
    const { classes, onChange, handleLocationClear, value } = this.props

    return (
      <div style={styles.container}>
        <IconButton className={classes.iconButton} aria-label='Search'>
          <SearchIcon />
        </IconButton>
        <InputBase
          className={classes.input}
          placeholder='Search insurance'
          aria-label='Search insurance'
          value={value}
          required
          onFocus={() => this.setState({ onFocus: !this.state.onFocus })}
          onBlur={() => this.setState({ onFocus: !this.state.onFocus })}
          onChange={e => onChange(e)}
        />
        {this.state.onFocus ? (
          <CloseIcon
            className={classes.closeButton}
            onPointerDown={() => handleLocationClear()}
            onTouchStart={() => handleLocationClear()}
          />
        ) : null}
      </div>
    )
  }
}

InsuranceSearch.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(InsuranceSearch)
