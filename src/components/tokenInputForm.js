import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import LinearProgress from '@material-ui/core/LinearProgress';


const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row'
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 600,
    },
    button: {
        margin: theme.spacing.unit * 2,
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
    liner: {
        flexGrow: 1
    },
    submitField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 600
    }
});

class TextFields extends React.Component {

    handleChange = name => event => {
        this.props.handleChange({
            type: name,
            value: event.target.value
        });

    };

    handleSubmit = (state) => () => {
        this.props.handleSubmit(state);
    };

    render() {
        const { classes, loading, success, isMetaMaskInstalled} = this.props;

        return (
            <form className={classes.container} noValidate autoComplete="off">

                <TextField
                    required
                    id="name"
                    label="NAME"
                    placeholder="TOKENGENCOIN"
                    type="string"
                    className={classes.textField}
                    margin="normal"
                    onChange={this.handleChange('CHANGE_NAME')}
                    disabled={success}
                />
                <TextField
                    required
                    id="symbol"
                    label="SYMBOL"
                    placeholder="TGN"
                    type="string"
                    className={classes.textField}
                    onChange={this.handleChange('CHANGE_SYMBOL')}
                    margin="normal"
                    disabled={success}
                />
                <TextField
                    required
                    id="totalSupply"
                    label="TOTAL SUPPLY"
                    placeholder={1000}
                    onChange={this.handleChange('CHANGE_TOTAL_SUPPLY')}
                    type="number"
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    margin="normal"
                    disabled={success}
                />
                <div className={classes.submitField}>
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        onClick={this.handleSubmit()}
                        disabled={!isMetaMaskInstalled || loading || success}
                    >
                        {!isMetaMaskInstalled ? 'INSTALL METAMASK FIRST!' : !success ? 'SUBMIT' : 'Go to CHECK TOKEN ADDRESS'}
                        <Icon className={classes.rightIcon}>send</Icon>
                    </Button>
                    {(() => {
                        if (loading) {
                            return (
                                <div className={classes.liner}>
                                    <LinearProgress color="secondary" />
                                    <br/>
                                </div>
                            );
                        }
                    })()}
                </div>
            </form>
        );
    }
}

TextFields.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);
