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
			var marker = L.marker([point.Lat, point.Long],{icon: Icons[topicColors[point.Category]]});
      marker.addTo(Layers[point.Category]);
			marker.bindPopup(point.Category);
      marker.myCustomId = point;
      marker.on('click', onMarkerClick);
		})
	})
}

function onMarkerClick(e) {
  var point = e.target.myCustomId;
  document.getElementById("category").innerHTML = "Category : " + point.Category;
  document.getElementById("datum").innerHTML = "Datum : " + point.Datum;
  document.getElementById("preis").innerHTML = "Preis : " + point.Preis;
  document.getElementById("farbe").innerHTML = "Farbe : " + point.Farbe;
  document.getElementById("marke").innerHTML = "Marke : " + point.Marke;
  document.getElementById("land").innerHTML = "Land : " + point.Herkunftsland;
  document.getElementById("nachhaltigkeit").innerHTML = "Nachhaltigkeit : " + point.Nachhaltigkeit;
}
