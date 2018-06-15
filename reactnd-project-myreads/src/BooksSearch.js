import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
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
    constructor(props){
        super(props);
        this.state.myBookList = props.myBookList;
    }

    state = {
        books: [],
        myBookList: []
    }

    onSearchTextChange = (event) =>
    {
        event.preventDefault();
        const { value } = event.target;

        if (value && value.length > 2) {
            BooksAPI.search(event.target.value)
                .then(res => this.setState({ books: res}))
                .catch(error => this.setState({ books: []}));
        }
    }

    getBook = (book) => {
        const found = this.state.myBookList.filter(item => book.id === item.id);
        if (found.length > 0) {
            book.shelf = found[0].shelf;
            return book;
        } else {
            return book;
        }
    }

    render()
    {
        const { classes, onBooksShelfChange} = this.props;
        const { books } = this.state;

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

                    <GridList cellHeight={300} cols={4}>
                    {books &&  books.map(item => (
                        <GridListTile key={item.id} cols={1}>
                            <BooksCard book={this.getBook(item)} onBooksShelfChange={(e, book, shelf) => onBooksShelfChange(e, book, shelf)} />
                        </GridListTile>
                    ))}
                    </GridList>
                </Paper>
            </div>
        );
    }
}

export default withStyles(styles)(BooksSearch);
