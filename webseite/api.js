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
			if(Layers[point.category]==undefined) {
				Layers[point.category]=L.layerGroup();
				Layers[point.category].addTo(mymap);
			}
			var marker = L.marker([point.latitude, point.longitude],{icon: Icons[topicColors[point.category]]});
      marker.addTo(Layers[point.category]);
			marker.bindPopup(point.name);
      marker.myCustomId = point;
      marker.on('click', onMarkerClick);
		})
	})
}

function onMarkerClick(e) {
  var point = e.target.myCustomId;
  document.getElementById("name").innerHTML = point.name;
  document.getElementById("bild").innerHTML = "<img src='fotos/image" + point.obs + ".jpeg' alt='Foto vom Kleidungsstück' height='200'>";
  document.getElementById("category").innerHTML = "<b>Category : </b>" + point.category;
  document.getElementById("datum").innerHTML = "<b>Datum : </b>" + point.datum;
  document.getElementById("preis").innerHTML = "<b>Preis : </b>" + point.preis + " Euro";
  document.getElementById("farbe").innerHTML = "<b>Farbe : </b>" + point.farbe;
  document.getElementById("marke").innerHTML = "<b>Marke : </b>" + point.marke;
  document.getElementById("land").innerHTML = "<b>Herkunftsland : </b>" + point.Herkunftsland;
  document.getElementById("nachhaltigkeit").innerHTML = "<b>Nachhaltigkeit : </b>" + point.nachhaltigkeit;
}
