import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';


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
        const { classes, name, symbol, decimals, totalSupply } = this.props;

        return (
            <form className={classes.container} noValidate autoComplete="off">

                <TextField
                    required
                    id="name"
                    label="NAME"
                    placeholder="MADOKACOIN"
                    type="string"
                    className={classes.textField}
                    margin="normal"
                    onChange={this.handleChange('CHANGE_NAME')}
                />
                <TextField
                    required
                    id="symbol"
                    label="SYMBOL"
                    placeholder="MDKCN"
                    type="string"
                    className={classes.textField}
                    onChange={this.handleChange('CHANGE_SYMBOL')}
                    margin="normal"
                />

                <TextField
                    required
                    id="decimals"
                    label="DECIMALS"
                    placeholder={18}
                    onChange={this.handleChange('CHANGE_DECIMALS')}
                    type="number"
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    margin="normal"
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
                />

                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    onClick={this.handleSubmit({name,symbol,decimals,totalSupply})}
                >
                    Create My Token
                    <Icon className={classes.rightIcon}>send</Icon>
                </Button>
            </form>
        );
    }
}

TextFields.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);
