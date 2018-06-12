import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    container: {
        width: '95%',
        margin: theme.spacing.unit * 3,
        overflowX: 'auto'
    },
    textField: {
        width: 400 ,
    },
    button: {
        margin: theme.spacing.unit
    }
});

class PesquisaCliente extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        const { pesquisarHandle, classes } = this.props;

        return (
            <div className={classes.container}>
                <form onSubmit={e => pesquisarHandle(e)}>
                    <TextField
                        className={classes.textField}
                        label="Digite o texto para pesquisa..."
                        margin="normal"
                    />
                    <Button type="submit" variant="contained" color="primary" className={classes.button}>
                        Pesquisar
                    </Button>
                </form>
            </div>
        );
    }
}

export default withStyles(styles)(PesquisaCliente);
