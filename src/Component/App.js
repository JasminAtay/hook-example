import React, {useState} from 'react'
import { CssBaseline, Container, Typography } from '@material-ui/core';
import ImageIcon from '@material-ui/icons/Image';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import axios from 'axios';



const App = () => {
    const [images, setImages] = useState([]);
    const onSearchSubmit = async(state) =>{
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: { query: state },
            headers:{
                Authorization: 'Client-ID Y2IB-pu10Fy2OL_Bls0DambFfcrsGfKX40XLqiFwIQw',
            },
        });
        setImages(response.data.results)
        
    };


    return (
        <>
            <CssBaseline />
            <Container maxWidth="lg">
                <Typography variant="h4" gutterBottom>
                    <ImageIcon style={{ fontSize: 40, margin: 5 }}/>
                    React Pic Search
                </Typography>
            <SearchBar send={onSearchSubmit}/>
            </Container>
            <ImageList images={images}/>
        </>
    )
}

export default App
  