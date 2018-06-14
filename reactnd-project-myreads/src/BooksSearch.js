import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import BooksCard from './BooksCard';
import BooksSearchInputText from './BooksSearchInputText';
import * as BooksAPI from './BooksAPI';

const styles = theme => ({
    root: theme.mixins.gutters({
        padding: 16,
        margin: theme.spacing.unit * 3,
    })
});

class BooksSearch extends Component
{
    onSearchTextChange = (event) => {
        event.preventDefault();
        const { value } = event.target;
        if (value && value.length > 2) {
            console.log(value);
            BooksAPI.search(event.target.value).then(res => console.log(res));
        }
    }

    render()
    {
        const { classes, onSearchTextChange } = this.props;

        return (
            <div>
                <Paper className={classes.root} elevation={4}>
                    <Link to='/'>
                        <IconButton>
                            <ArrowBackIcon />
                        </IconButton>
                    </Link>
                    <Typography variant="headline" component="h3">
                    </Typography>
                    <BooksSearchInputText onSearchTextChange={this.onSearchTextChange} />
                </Paper>
            </div>
        );
    }
}

export default withStyles(styles)(BooksSearch);
