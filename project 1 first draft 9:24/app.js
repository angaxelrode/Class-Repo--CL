var map = L.map('map').setView([40.6652, -73.8759], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([40.6652, -73.8759]).addTo(map);

marker.bindPopup("<b>Welcome to a future where community land trusts run our neighborhoods!</b> <br> Check out the articles below to see how community land trusts have evolved overtime.").openPopup();

document.addEventListener('DOMContentLoaded', function() {
    fetch('articles.json')  
        .then(response => response.json())
        .then(articles => {
            // Sort articles by date in descending order
            articles.sort((a, b) => new Date(b.date) - new Date(a.date));

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