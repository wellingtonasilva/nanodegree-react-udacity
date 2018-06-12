import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    container: {
        width: '95%',
        margin: theme.spacing.unit * 3,
        overflowX: 'auto'
    },
    textField: {
        width: 400 ,
    }
});

class ManterCliente extends Component
{

    render()
    {
        const { classes } = this.props;

        return (
            <div>
                <form className={classes.container}>
                    <TextField
                        id='id'
                        label="ID"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        placeholder="ID"
                        helperText="Informe o código do cliente"
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        id='nome'
                        label="Nome"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        placeholder="Nome"
                        helperText="Informe o Nome do cliente"
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        id='idade'
                        label="Idade"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        placeholder="Idade"
                        helperText="Informe a idade"
                        fullWidth
                        margin="normal"
                    />

                </form>
            </div>
        );
    }
}

export default withStyles(styles)(ManterCliente);
