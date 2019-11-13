const dotenv = require('dotenv');
const fetch = require("node-fetch");

dotenv.config();

console.log(process.env.API_KEY);

const api = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json';
const apiKey = process.env.API_KEY;
const queryByLocation = 'location=13.8239314, 100.52384986476198';
const queryByType = 'type=restaurant';
const queryByRankBy = 'rankby=distance';


async function findAllRestaurant () {
	const response = await fetch(`${api}?${queryByLocation}&${apiKey}&${queryByType}&${queryByRankBy}`);
	const data = await response.json();
	return data.results
}

module.exports = { findAllRestaurant };
