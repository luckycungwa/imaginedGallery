import React, { useState, useEffect } from 'react';
import { fetchRandomImages, fetchImages } from '../apiService';
import { Grid, Paper, Box } from '@mui/material';
import SearchInput from '../components/SearchInput';
import ImageItem from '../components/ImageItem';

const Home = () => {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInitialImages = async () => {
      try {
        let data;
        if (searchQuery.trim() === '') {
          data = await fetchRandomImages();
        } else {
          data = await fetchImages(searchQuery);
        }
        setImages(data);
        setError(null); // Clear any previous errors
      } catch (error) {
        console.error('Error fetching images:', error);
        setError(error); // Log and set the error state
        setImages([]); // Clear images in case of error
      }
    };

    fetchInitialImages();
  }, [searchQuery]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="home">
      <h2>{searchQuery.trim() === '' ? 'Random Images' : `Search Results for "${searchQuery}"`}</h2>
      <SearchInput onSearch={handleSearch} />
      {error && <p>Error: {error.message}</p>} {/* Error control stuff */}
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {images.map((image, index) => (
            <Grid item xs={6} sm={4} md={3} lg={2} key={index}>
              <Paper elevation={3}>
              <ImageItem image={image} />
                {/* <img src={image.src} alt={image.alt} style={{ width: '100%', height: 'auto' }} />
                <p>{image.photographer}</p> */}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default Home;
