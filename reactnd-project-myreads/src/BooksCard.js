import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const styles = theme => ({
    card: {
        minWidth: 300,
        minHeight: 380,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    media: {
        maxWidth: '100%',
        height: 'auto',
        width: '145px',
        transform: 'translateX(50%)'
    }
});

const options = [
    'currentlyReading',
    'wantToRead',
    'read',
    'none'
]

const optionsTitle = [
    'currently reading',
    'want to read',
    'read',
    'None'
]

class BooksCard extends Component
{
    constructor(props) {
        super(props);
        this.state.book = props.book;
        this.state.selectedIndex = options.indexOf(props.book.shelf);
    }

    state = {
        anchorEl: null,
        selectedIndex: 0,
        book: null
    }

    handleClick = (e) => {
        this.setState({
            anchorEl: e.currentTarget
        });
    }

    handleMenuItemClick = (event, index) => {
        this.setState({
            anchorEl: null,
            selectedIndex: index
        });

    }

    handleClose = () => {
        this.setState({
            anchorEl: null
        });
    }

    render()
    {
        const { classes} = this.props;
        const { book, anchorEl } = this.state;

        return (
            <div>
                <Card className={classes.card}>
                    <CardHeader
                        action={
                            <IconButton
                                aria-label="More"
                                aria-haspopup="true"
                                aria-owns={anchorEl ? 'long-menu' : null}
                                onClick={this.handleClick}
                            >
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title={
                            <Typography variant='title' gutterBottom>
                                {book.title}
                            </Typography>
                        }
                        subheader={book.subtitle}
                    />
                    <img src={book.imageLinks.thumbnail} className={classes.media}/>
                </Card>
                <Menu
                    id='long-menu'
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}
                >
                    {optionsTitle.map((option,index) => (
                        <MenuItem
                        key={option}
                        selected={index === this.state.selectedIndex}
                        onClick={event => this.handleMenuItemClick(event, index)}
                        >
                            {option}
                        </MenuItem>
                    ))}
                </Menu>
            </div>
        );
    }
}

export default withStyles(styles)(BooksCard);
