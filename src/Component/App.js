import React from 'react'
import { CssBaseline, Container, Typography } from '@material-ui/core';

const App = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="large">
                <Typography variant="h4" gutterBottom>
                    React Pic Search
                </Typography>
            </Container>
        </React.Fragment>
    )
}

export default App
  