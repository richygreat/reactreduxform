import React, { Component } from "react"
import { withStyles, AppBar, Toolbar, Typography, IconButton, Drawer } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';

const styles = theme => ({
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
});

class SearchAppBar extends Component {
    state = {
        left: false
    };

    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };

    render() {
        const { classes } = this.props;
        return (
            <div>
                <AppBar position="static" color="secondary">
                    <Toolbar>
                        <IconButton onClick={this.toggleDrawer('left', true)} className={classes.menuButton} color="primary" aria-label="Open drawer">
                            <MenuIcon />
                        </IconButton>
                        <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
                            <div
                                tabIndex={0}
                                role="button"
                                onClick={this.toggleDrawer('left', false)}
                                onKeyDown={this.toggleDrawer('left', false)}
                            >
                            </div>
                        </Drawer>
                        <Typography className={classes.title} variant="h6" color="primary" noWrap>
                            Demo
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default withStyles(styles)(SearchAppBar);