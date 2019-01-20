import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import CardMedia from '@material-ui/core/CardMedia';
import { withStyles } from '@material-ui/core/styles';
import CustomizedInputBase from '../material/SearchBar';
import BeenHereIcon from '@material-ui/icons/BeenhereOutlined';
import InsertInvitation from '@material-ui/icons/InsertInvitationOutlined';
import CloudOffIcon from '@material-ui/icons/CloudOffOutlined';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindowsOutlined';
import Paper from '@material-ui/core/Paper';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeftOutlined';

const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        [theme.breakpoints.up('sm')]: {
            position: 'absolute',
            right: 0,
            margin: '15px 15px 0 15px',
        },
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
        marginLeft: drawerWidth,
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
        },
        background: 'white',
    },
    menuButton: {
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    media: {
        maxWidth: 150,
        objectFit: 'contain',
        [theme.breakpoints.up('sm')]: {
            height: 60,
        },
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
        const { classes, theme } = this.props;

        const drawer = (
            <div>
                <div className={classes.toolbarIcon}>
                    <IconButton onClick={this.handleDrawerToggle} className={classes.menuButton} >
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                <List>
                    {['Insurance', 'Appointments', 'Offline', 'Desktop'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{(() => {
                                switch (index) {
                                    case 0: return <BeenHereIcon />;
                                    case 1: return <InsertInvitation />;
                                    case 2: return <CloudOffIcon />;
                                    case 3: return <DesktopWindowsIcon />;
                                    default: return <CloudOffIcon />
                                }
                            })()}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
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
                        <IconButton
                            color="default"
                            aria-label="Open drawer"
                            onClick={this.handleDrawerToggle}
                            className={classes.menuButton}
                        >
                            <MenuIcon />
                        </IconButton>
                        <CardMedia
                            component="img"
                            alt="Emory Rehab"
                            className={classes.media}
                            height="40"
                            image="/assets/logo-emory-footer.png"
                            title="Emory Rehab"
                        />
                    </Toolbar>
                    <Paper className={classes.paper}>
                        <CustomizedInputBase />
                    </Paper>
                </AppBar>
                <nav className={classes.drawer}>
                    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
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