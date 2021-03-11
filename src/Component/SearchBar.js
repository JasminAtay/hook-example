/* eslint-disable no-undef */
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, InputBase, Divider, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '5px 10px',
        display: 'flex',
        alignItems: 'center',
        margin: '10px'
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
}));

const SearchBar = ({ send }) => {
    const classes = useStyles();
    const [state, setState] = useState('');
    const onFormSubmit = (e) => {
        e.preventDefault();
        send(state);
    };


    return (
        <Paper component="form" onSubmit={onFormSubmit} className={classes.root}>

            <InputBase
                className={classes.input}
                placeholder="Search"
                value={state}
                onChange={(e) => setState(e.target.value)} />

            <Divider className={classes.divider} orientation="vertical" />

            <IconButton
                type="submit"
                className={classes.iconButton}
                aria-label="search"
            >
                <SearchIcon />
            </IconButton>
        </Paper>
    );
};
export default SearchBar