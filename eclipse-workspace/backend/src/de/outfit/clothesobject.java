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
		obs = this.obs;
		datum = this.datum;
		latitude = this.latitude;
		longitude = this.longitude;
		name = this.name;
		category = this.category;
		preis = this.preis;
		farbe = this.farbe;
		Herkunftsland = this.Herkunftsland;
		nachhaltigkeit = this.nachhaltigkeit;
		marke = this.marke;
	}
}
