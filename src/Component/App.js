import React from 'react'
import { CssBaseline, Container, Typography } from '@material-ui/core';
import ImageIcon from '@material-ui/icons/Image';

const App = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="large">
                <Typography variant="h4" gutterBottom>
                    <ImageIcon style={{ fontSize: 40, margin: 15 }}/>
                    React Pic Search
                </Typography>
            </Container>
        </React.Fragment>
    )
}

export default App
  