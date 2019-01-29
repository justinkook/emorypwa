import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import BeenHereIcon from '@material-ui/icons/BeenhereOutlined';
import InsertInvitation from '@material-ui/icons/InsertInvitationOutlined';
import CloudOffIcon from '@material-ui/icons/CloudOffOutlined';
import Paper from '@material-ui/core/Paper';
import SearchIcon from '@material-ui/icons/SearchOutlined';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import InsuranceSearch from './InsuranceSearchBar';

const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        paddingLeft: 30,
    },
    title: {
        color: 'rgb(6, 67, 94)'
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        boxShadow: '0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)',
        [theme.breakpoints.up('sm')]: {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
        },
        background: 'white',
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
    },
    paper: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        maxWidth: 450,
        justifyContent: 'center',
        border: '2px solid rgb(6, 67, 94)',
        borderRadius: 6 + 'px',
        margin: '20px',
        boxShadow: 'none',
    },
    link: {
        color: theme.palette.primary.main,
        textDecoration: 'none',
    },
});

class ResponsiveDrawer extends React.Component {
    state = {
        mobileOpen: false,
    };

    handleDrawerToggle = () => {
        this.setState(state => ({ mobileOpen: !state.mobileOpen }));
    };

    render() {
        const { classes, onChange, value, theme } = this.props;

        const drawer = (
            <div>
                <div className={classes.toolbarIcon}>
                </div>
                <Divider />
                <List>
                    {['Search', 'Insurance', 'Appointments'].map((text, index) => (
                        <Link to={`/${text}`} key={text} className={classes.link} >
                            <ListItem button >
                                <ListItemIcon>{(() => {
                                    switch (index) {
                                        case 0: return <SearchIcon />;
                                        case 1: return <BeenHereIcon />;
                                        case 2: return <InsertInvitation />;
                                        default: return <CloudOffIcon />
                                    }
                                })()}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        </Link>
                    ))}
                </List>
                <Divider />
            </div>
        );

        return (
            <div className={classes.root}>
                <CssBaseline />
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar className={classes.root} >
                        <Typography variant='title' className={classes.title} >Insurance</Typography>
                    </Toolbar>
                    <Paper className={classes.paper}>
                        <InsuranceSearch value={value} onChange={onChange} />
                    </Paper>
                </AppBar>
                <nav className={classes.drawer}>
                    <Hidden smUp implementation="css">
                        <Drawer
                            container={this.props.container}
                            variant="temporary"
                            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                            open={this.state.mobileOpen}
                            onClose={this.handleDrawerToggle}
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                    <Hidden xsDown implementation="css">
                        <Drawer
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                            variant="permanent"
                            open
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                </nav>
            </div>
        );
    }
}

ResponsiveDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
    container: PropTypes.object,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);