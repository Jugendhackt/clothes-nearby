package de.outfit;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

public class MySQL {
	public static String ip = "127.0.0.1";
	public static String port = "3306";
	public static String user = "root";
	public static String password = "";
	
	public static String dbname = "clothes";
	
	public static Connection con;
	
	public static void connect() {
		con = null;
		
		// Treiber laden
		try {Class.forName("org.gjt.mm.mysql.Driver").newInstance();}
		catch(Exception ex) {System.out.println("Treiber fehlgeschlagen!");}
		
		// Verbindung aufbauen
		try {
			String url = "jdbc:mysql://" + ip + ":" + port + "/" + dbname;
			con = DriverManager.getConnection(url, user, password);
			
			data();
			
			con.close();
		} catch (SQLException ex) {System.out.println("Verbindung fehlgeschlagen!");}
	}
	
	public static ArrayList<clothesobject> data() {
		ArrayList<clothesobject> objectlist = new ArrayList<clothesobject>();
		
		try {
			// Objekt aus Datenbank auslesen
			
			String query = "select * FROM " + dbname;
			Statement stmt = con.createStatement();
			ResultSet rset;
			
			rset = stmt.executeQuery(query);
			
			
			
			
			// Objekt zu clothesobject übergeben
			while(rset.next()) {
				clothesobject object = new clothesobject();
				object.createObject(rset.getInt(0), rset.getString(1), rset.getFloat(2), rset.getFloat(3), rset.getString(4), rset.getString(5), rset.getFloat(6), rset.getString(7), rset.getString(8), rset.getBoolean(9), rset.getString(10));
				objectlist.add(object);
			}
			
			rset.close();
			stmt.close();
		} catch(SQLException ex) {}
		return objectlist;
	}
}
