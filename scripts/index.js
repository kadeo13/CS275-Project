/*Interactive Map of US States -
  Uses Leaflet, an open-source mapping tool
  and Mapbox, a tiling API. State boundaries are drawn
  using data provided by Mike Bostock */

import statesData from '../data/us-states.js';

var mapBoxToken = "pk.eyJ1IjoiYmZrb2xsZSIsImEiOiJjanp1MHE1ZDgwYmJxM25wY2pkNGtzenVyIn0.YZP-doaUfSFGlpCkTNdG_A";
var usMap = L.map('map').setView([37.8, -96], 4);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	id: 'mapbox.light',
	accessToken: mapBoxToken
}).addTo(usMap);

L.geoJson(statesData).addTo(usMap);