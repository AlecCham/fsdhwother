require('dotenv').config();
const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3010;

// Weather API
const WEATHER_API_BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

// Unsplash API
const UNSPLASH_API_BASE_URL = 'https://api.unsplash.com';

app.use(express.json());

// Endpoint for weather data
app.get('/weather', async (req, res) => {
    try {
        const response = await axios.get(`${WEATHER_API_BASE_URL}`, {
            params: {
                q: req.query.q,
                appid: process.env.WEATHER_API_KEY
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Endpoint for Unsplash data
app.get('/', async (req, res) => {
    res.send('Welcome to the Server');
    try {
        const response = await axios.get(`${UNSPLASH_API_BASE_URL}/search/photos`, {
            params: {
                query: req.query.query,
                client_id: process.env.UNSPLASH_PUBLIC_KEY
            },
            headers: {
                'Authorization': `Client-Secret ${process.env.UNSPLASH_SECRET_KEY}`
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});