import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import BooksList from './BooksList';
import BooksSearch from './BooksSearch';
import * as BooksAPI from './BooksAPI';

const styles = theme => ({
        root: {
            backgroundColor: theme.palette.background.paper,
        },
        fab: {
            position: 'absolute',
            bottom: theme.spacing.unit * 2,
            right: theme.spacing.unit * 2,
        }
    });

    class BooksApp extends Component
    {
        state = {
            bookList: []
        }

        componentDidMount()
        {
            BooksAPI.getAll().then(res => this.setState({
                bookList: res
            }));
        }

        render()
        {
            const { classes } = this.props;
            const { bookList } = this.state;

            return (
                <div className={classes.root}>
                    <Route exact path="/" render={() => (
                        <div>
                            <BooksList bookList={bookList} shelf={'currentlyReading'} title={'Currently Reading'}/>
                            <BooksList bookList={bookList} shelf={'wantToRead'} title={'Want to read'}/>
                            <BooksList bookList={bookList} shelf={'read'} title={'Read'}/>

                            <Link to="/search" id="book-search">
                                <Button variant='fab' className={classes.fab} color='primary'>
                                    <AddIcon />
                                </Button>
                            </Link>
                        </div>
                    )}/>
                    <Route path="/search" render={() => (
                        <BooksSearch />
                    )}/>
            </div>
        );
    }
}

export default withStyles(styles)(BooksApp);
