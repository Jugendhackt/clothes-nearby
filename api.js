async function drawShops() {
	fetch("./daten.json")
  .then(function(response){
    return response.json();
  })
  .then(function(json){
		Layers=[];
		var topicColors={
        "T-Shirt":"green",
        "Jacke":"orange",
		    "Hose":"red",
		    "Rock":"grey",
		    "Kleid":"blue",
		    "Pullover":"yellow"
		};
		json.forEach(function(point){
			if(Layers[point.Category]==undefined) {
				Layers[point.Category]=L.layerGroup();
				Layers[point.Category].addTo(mymap);
			}
			L.marker([point.Lat, point.Long],{icon: Icons[topicColors[point.Category]]}).addTo(Layers[point.Category]).
				bindPopup(point.Category);
		})
	})
}
