function onload(){
	mymap = L.map('mapid').setView([50.935, 6.965], 14);
	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 30,minZoom:2,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
			'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox.streets'
	}).addTo(mymap);

	var southWest = L.latLng(-89.98155760646617 ,-180),
	northEast = L.latLng(89.99346179538875, 180);
	var bounds = L.latLngBounds(southWest, northEast);

	mymap.setMaxBounds(bounds);
	mymap.on('drag', function() {
    mymap.panInsideBounds(bounds, { animate: false });
});
	coloured_icons();
	drawShops();
}
window.addEventListener("load", onload);

function coloured_icons(){
	Icons = [];

	  Icons.green = new L.Icon({
	    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
	    iconSize: [25, 41],
	    iconAnchor: [12, 41],
	    popupAnchor: [1, -34],
	  });

	  Icons.red = new L.Icon({
	    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
	    iconSize: [25, 41],
	    iconAnchor: [12, 41],
	    popupAnchor: [1, -34],
	  });

	  Icons.yellow = new L.Icon({
	    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-yellow.png',
	    iconSize: [25, 41],
	    iconAnchor: [12, 41],
	    popupAnchor: [1, -34],
	  });

	  Icons.blue = new L.Icon({
	    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
	    iconSize: [25, 41],
	    iconAnchor: [12, 41],
	    popupAnchor: [1, -34],
	  });

	  Icons.grey = new L.Icon({
	    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-grey.png',
	    iconSize: [25, 41],
	    iconAnchor: [12, 41],
	    popupAnchor: [1, -34],
	  });

	  Icons.orange = new L.Icon({
		  iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png',
		  iconSize: [25, 41],
		  iconAnchor: [12, 41],
		  popupAnchor: [1, -34],
		});
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}
