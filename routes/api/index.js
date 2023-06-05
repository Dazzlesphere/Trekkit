const express = require('express');
const router = express.Router();
const axios = require('axios');

// Import the homeController
//const homeController = require('../../controllers/pages/homeController');

router.get('/country/:countryId', async (req, res) => {
    try {
        // Make a request to the external API
        const url = `https://restcountries.com/v3.1/name/${req.params.countryId}`;
        const response = await fetch(url);
        let data = await response.json();

        if (!data.length) {
            res.json(data);
            return;
        }

        data = data[0];
        const country = {
            ...(data.name && data.name.common && { name: data.name.common }),
            ...(data.name && data.name.official && { officialName: data.name.official }),
            ...(data.region && { region: data.region }),
            ...(data.subregion && { subregion: data.subregion }),
            ...(data.capital && { capital: data.capital }),
            ...(data.borders && { borders: data.borders }),
            ...(data.area && { area: data.area }),
            ...(data.population && { population: data.population }),
            ...(data.languages && { languages: data.languages }),
            ...(data.latlng && { latlng: data.latlng }),
            ...(data.cca2 && { alpha2: data.cca2 }),
            ...(data.cca3 && { alpha3: data.cca3 }),
            ...(data.flags && data.flags.svg && { flag: data.flags.svg }),
        }

        // Send the custom JSON back to the caller
        res.json(country);
    } catch(error) {
        console.error('Error:', error.message);
        res.status(500).json({ error: 'An error occurred' });
    }
})

module.exports = router;