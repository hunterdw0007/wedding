var map = L.map('address__map--ceremony').setView([35.231611427341875, -84.79743950326824], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker([35.231611427341875, -84.79743950326824], {title:'The Barn at Hickory Hills'}).addTo(map);
//marker.bindPopup("The Barn at Hickory Hills").openPopup();