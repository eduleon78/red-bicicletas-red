var map = L.map('main_map').setView([10.976361, -63.866047], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZWR1bGVvbjc4IiwiYSI6ImNrcDF1MHJrZTFlZDgyb3FvemEwZzk1MTIifQ.l8L_rKF2SbIo8-H6Ez-b-A'
}).addTo(map);

var marker = L.marker([10.974160, -63.864910]).addTo(map);
var marker = L.marker([10.969952, -63.865933]).addTo(map);
var marker = L.marker([10.968593, -63.859303]).addTo(map);