package de.outfit;

public class clothesobject {
	int obs;
	String datum;
	float latitude;
	float longitude;
	String name;
	String category;
	float preis;
	String farbe;
	String Herkunftsland;
	boolean nachhaltigkeit;
	String marke;
	
	public void createObject(int obs, String datum, float latitude, float longitude, String name, String category, float preis, String farbe, String Herkunftsland, boolean nachhaltigkeit, String marke) {
		this.obs = obs;
		this.datum = datum;
		this.latitude = latitude;
		this.longitude = longitude;
		this.name = name;
		this.category = category;
		this.preis = preis;
		this.farbe = farbe;
		this.Herkunftsland = Herkunftsland;
		this.nachhaltigkeit = nachhaltigkeit;
		this.marke = marke;
	}
}
