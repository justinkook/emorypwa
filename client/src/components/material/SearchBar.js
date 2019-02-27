import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import AlertDialog from "../material/AlertDialog";
import CloseIcon from "@material-ui/icons/CloseOutlined";
import { ResultContext } from "../utils/ContextApi";
import { Redirect } from "react-router-dom";

const styles = {
  container: {
    display: "flex",
    width: 100 + "%",
    alignItems: "center"
  },
  input: {
    flex: 1,
    color: "rgb(6, 47, 94)",
    paddingLeft: 10,
    width: "100%"
  },
  iconButton: {
    padding: 10,
    color: "rgb(6, 47, 94)",
    paddingRight: 0
  },
  closeButton: {
    color: "rgb(6, 47, 94)",
    marginRight: 15,
    marginLeft: 15,
    cursor: "pointer"
  }
};

function CustomizedInputBase(props) {
  const { classes, context } = props;

  if (context.state.confirmGetAll) {
    return <Redirect to={"/search"} />;
  }
  return (
    <ResultContext.Consumer>
      {context => (
        <div style={styles.container}>
          <IconButton className={classes.iconButton} aria-label="Search">
            <SearchIcon />
          </IconButton>
          <form onSubmit={e => context.handleGetAll(e)}>
            <InputBase
              className={classes.input}
              placeholder="Search by zip code"
              autoComplete="shipping postal-code"
              aria-label="Search by location"
              value={context.state.locationInput}
              required
              name="search"
              type="search"
              onFocus={() => context.handleOnFocus()}
              onBlur={() => context.handleOffFocus()}
              onChange={e => context.handleLocationUpdate(e)}
            />
          </form>
          {context.state.onFocus ? (
            <CloseIcon
              className={classes.closeButton}
              onPointerDown={() => context.handleLocationClear()}
              onTouchStart={() => context.handleLocationClear()}
            />
          ) : (
            <AlertDialog context={context} />
          )}
        </div>
      )}
    </ResultContext.Consumer>
  );
}

CustomizedInputBase.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CustomizedInputBase);
