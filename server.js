const express = require('express');
const fetch = require('node-fetch');

const app = express();
const port = process.env.PORT || 3000;


app.listen(port, () => console.log('Listening at 3000'));

app.get('/ip', async (request, response) => {
    const api_url = 'https://api.myip.com';

    const fetch_response = await fetch(api_url);
    const json = await fetch_response.json();
    response.send(json)
})