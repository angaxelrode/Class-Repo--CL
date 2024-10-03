// Initialize the map
var map = L.map('map', {
    scrollWheelZoom: false // Disables zoom with the scroll wheel
}).setView([40.6652, -73.8759], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Add a custom control for the title in the top right
var titleControl = L.control({ position: 'topright' });

titleControl.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'map-title'); 
    div.innerHTML = '<h1>EAST NEW YORK COMMUNITY LAND TRUST</h1>';
    return div;
};
titleControl.addTo(map);

// Add the standalone popup (not tied to a marker)
var popup = L.popup()
    .setLatLng([40.66215, -73.807182]) // Standalone popup location
    .setContent("a community land trust or (CLT) is a nonprofit corporation that holds land on behalf of a place-based community, while serving as the long-term steward for affordable housing, community gardens, civic buildings, commercial spaces and other community assets on behalf of a community")
    .addTo(map); // Use .addTo(map) to avoid replacing the marker's popup

// Custom icon for the marker
var greenIcon = L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/2701/2701176.png',
    iconSize: [60, 60],       // Size of the icon
    iconAnchor: [18, 37],     // Anchor point at the bottom center of the icon
    popupAnchor: [22, -35]     // Popup appears above the icon
});

// Add a marker with a custom icon and bind a popup, but don't open it initially
var marker = L.marker([40.6652, -73.8759]).addTo(map);
marker.bindPopup("<b>Welcome to a future where community land trusts run our neighborhoods!</b> <br> Check out the articles below to see how community land trusts have evolved over time.");

var marker = L.marker([40.687395, -73.93609], {icon: greenIcon}).addTo(map);
marker.bindPopup("I want to see AFFORDABLE housing options!!!");
var marker = L.marker([40.64649, -73.952567], {icon: greenIcon}).addTo(map);
marker.bindPopup("more community gardenssssss");
var marker = L.marker([40.677627, -73.971619], {icon: greenIcon}).addTo(map);
marker.bindPopup("community development how WE want, not how developers chasing unsustainable profit margins want xoxo");
var marker = L.marker([40.66408, -73.929053], {icon: greenIcon}).addTo(map);
marker.bindPopup("nature guides the way forward");

// function onMapClick(e) {
// alert("You clicked the map at " + e.latlng);
//  }
// map.on('click', onMapClick);

document.addEventListener('DOMContentLoaded', function() {
    fetch('articles.json')  
        .then(response => response.json())
        .then(articles => {
            // Sort articles by date in descending order
            articles.sort((a, b) => new Date(a.date) - new Date(b.date));

            const container = document.getElementById('article-container');
            
            // For each article object in the array, the code inside the loop creates an HTML structure and appends it to the article-container.
            articles.forEach(article => {
                const tile = document.createElement('div');
                tile.className = 'article-tile';

                // Create an anchor tag for the article
                const articleLink = document.createElement('a');
                articleLink.href = article.link;
                articleLink.target = "_blank"; // Open in new tab
                
                // Create image element - did not do this yet 
                const image = document.createElement('img');
                image.src = article.image;
                image.alt = article.title;
                image.className = 'article-image';

                // Create title, date, and summary elements
                const title = document.createElement('div');
                title.className = 'article-title';
                title.innerText = article.title;

                const date = document.createElement('div');
                date.className = 'article-date';
                date.innerText = article.date;

                const summary = document.createElement('div');
                summary.className = 'article-summary';
                summary.innerText = article.summary;

                // Append elements to the tile
                articleLink.appendChild(image); // The image is appended to the anchor (<a>) link.
                tile.appendChild(articleLink);
                tile.appendChild(title); // The title, date, summary, and keywords are added to the tile (div).
                tile.appendChild(date);
                tile.appendChild(summary);
                container.appendChild(tile); // The tile is appended to the container that holds all article tiles.
            });
        })
        .catch(error => console.error('Error loading JSON:', error));
});