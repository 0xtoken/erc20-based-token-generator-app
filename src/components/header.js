import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = (theme) => {
    return {
        root: {
            flexGrow: 1,
            paddingBottom: theme.spacing.unit * 8
        },
        flex: {
            flex: 1,
        },
        menuButton: {
            marginLeft: -12,
            marginRight: 20,
        }
    }
};

const ButtonAppBar = ({ classes }) => {
    return (
        <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar>
                    <Typography variant="title" color="inherit" className={classes.flex}>
                        Token Generator
                    </Typography>
                    <Button color="inherit" component={Link} to="/" >TOP</Button>
                    <Button color="inherit" component={Link} to="/steps" >STEPS</Button>
                    <Button color="inherit" component={Link} to="/faq">FAQ</Button>
                    <Button color="inherit" component={Link} to="/about">ABOUT</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};

ButtonAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);