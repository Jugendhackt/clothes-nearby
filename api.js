async function drawShops() {
	fetch("daten.json").then(function(response){return(response.json())}).then(function(json){
		Layers=[];
		var topicColors={
		    "Unterwäsche":"orange",
		    "Hosen":"red",
		    "Röcke":"grey",
		    "Kleider":"blue",
		    "Pullover":"yellow",
		    "T-shirts":"green",
        "Jacken":"pink",
		};
		json.forEach(function(point){
			if(Layers[point.Category]==undefined) {
				Layers[point.Category]=L.layerGroup();
				Layers[point.Category].addTo(mymap);
			}
			L.marker([point.Lat, point.Long],{icon: Icons[topicColors[point.Category]]}).addTo(Layers[point.Category]).
				bindPopup("<b>"+point.Category+"</b><br />"+point.Full_ref+"<br/><i>Data from "+point.Yr_start+" to "+point.Yr_end+".</i><br />Published in by "+point.Ref);
		})
		layerList=document.getElementById("layerlist");
		Object.keys(Layers).forEach(function(layer){
			var li=document.createElement("li");
			li.classList.add(topicColors[layer]);
			li.innerHTML="<label><input type=\"checkbox\" checked ><span>"+layer+"</span></label>";
			li.children[0].children[0].addEventListener("click",function(){
				if(this.checked) {
					mymap.addLayer(Layers[layer]);
				} else {
					mymap.removeLayer(Layers[layer]);
				}
			});
			layerList.appendChild(li);
		})
	})
}
