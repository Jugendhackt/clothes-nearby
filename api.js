async function drawShops() {
	fetch("http://192.168.88.30:8080/backend/clothes")
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
			marker.bindPopup(point.Name);
      marker.myCustomId = point;
      marker.on('click', onMarkerClick);
		})
	})
}

function onMarkerClick(e) {
  var point = e.target.myCustomId;
  document.getElementById("name").innerHTML = point.Name;
  document.getElementById("category").innerHTML = "<b>Category : </b>" + point.Category;
  document.getElementById("datum").innerHTML = "<b>Datum : </b>" + point.Datum;
  document.getElementById("preis").innerHTML = "<b>Preis : </b>" + point.Preis + " Euro";
  document.getElementById("farbe").innerHTML = "<b>Farbe : </b>" + point.Farbe;
  document.getElementById("marke").innerHTML = "<b>Marke : </b>" + point.Marke;
  document.getElementById("land").innerHTML = "<b>Herkunftsland : </b>" + point.Herkunftsland;
  document.getElementById("nachhaltigkeit").innerHTML = "<b>Nachhaltigkeit : </b>" + point.Nachhaltigkeit;
}
