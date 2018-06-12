import React, { Component} from 'react';
import './ListaCliente.css';
import PesquisaCliente from './PesquisaCliente';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import TagFacesIcon from '@material-ui/icons/TagFaces';

const tableHead = ["#ID", "Nome", "Idade"];
const styles = theme => ({
    root: {
        width: '95%',
        margin: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 400,
    },
    chip: {
        marginLeft: theme.spacing.unit * 3
    }
});

class ListaCliente extends Component
{
    state = {
        query: '',
        clients: []
    }

    clickMe = (e, id) => {
        console.log(`id: ${id}`);
    }

    pesquisar = (e) => {
        e.preventDefault();
        const { value } = e.target.querySelector('input');
        this.setState({
            query: value
        });
    }

    limparSelecao = (e) => {
        this.setState({
            query: ''
        });
    }

    componentDidMount()
    {
        const headers = {
            'Accept': 'application/json',
            'Authorization': Math.random().toString(36).substr(-8)
        }
        fetch('http://localhost:5708/clients', { headers })
            .then(res => res.json())
            .then(json => this.setState({clients: json}));
    }

    render()
    {
        let currentList;
        const { query, clients} = this.state;
        const { classes } = this.props;
        //Realiza pesquisa
        if (query) {
            const match = new RegExp(escapeRegExp(query), 'i');
            currentList = clients.filter((item) => match.test(item.nome));
        } else {
            currentList = clients;
        }



        //Ordena array
        currentList.sort(sortBy('id'));

        return (
            <div>
                <PesquisaCliente pesquisarHandle={this.pesquisar}/>
                {currentList.length !== clients.length && (
                    <Chip
                        key={Math.random().toString(36).substr(-8)}
                        label={"Exibindo " + currentList.length + " de " + clients.length}
                        className={classes.chip}
                        onDelete={e => this.limparSelecao(e)}
                    />
                )}
                <Paper className={classes.root}>
                    <Table className={classes.root}>
                        <TableHead>
                            <TableRow>
                            { tableHead.map(title => (
                                <TableCell>{title}</TableCell>
                            ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {currentList.map(item => {
                                return (
                                    <TableRow key={item.id}>
                                        <TableCell component="th" scope="row">{item.id}</TableCell>
                                        <TableCell>{item.nome}</TableCell>
                                        <TableCell numeric>{item.idade}</TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </Paper>
            </div>
        );
    }
}

export default withStyles(styles)(ListaCliente);
