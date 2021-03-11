import React from 'react'
import { CssBaseline, Container, Typography } from '@material-ui/core';
import ImageIcon from '@material-ui/icons/Image';
import SearchBar from './SearchBar';

const App = () => {
    return (
        <>
            <CssBaseline />
            <Container maxWidth="lg">
                <Typography variant="h4" gutterBottom>
                    <ImageIcon style={{ fontSize: 40, margin: 5 }}/>
                    React Pic Search
                </Typography>
            </Container>
            <SearchBar/>
        </>
    )
}

export default App
  