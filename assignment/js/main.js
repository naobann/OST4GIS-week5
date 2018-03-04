/* =====================
 Copy your code from Week 4 Lab 2 Part 2 part2-app-state.js in this space
===================== */
// task 1
var map = L.map('map', {
  center: [39.9522, -75.1639],
  zoom: 14
});
var Stamen_TonerLite = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.{ext}', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);
$('button').click(function() {
var downloadData=$.ajax($('#text-input1').val())
var Lat =$('#text-input2').val()
var Lng =$('#text-input3').val()
var parseData = function(data) {var parsedData= JSON.parse(data); return parsedData};
var makeMarkers = function(data) {var markers =[]; for(i=0;i<data.length;i++) {
   var marker=L.marker([data[i].Lat, data[i].Lng]);
  markers.push(marker);
} return markers;
};

var plotMarkers = function(data){for (i=0;i<data.length;i++){ data[i].addTo(map)}};

downloadData.done(function(data) {
  var parsed = parseData(data);
  var markers = makeMarkers(parsed);
  plotMarkers(markers);
});
});
