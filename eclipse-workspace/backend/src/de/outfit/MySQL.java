package de.outfit;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

public class MySQL {
	public static String ip = "localhost";
	public static String port = "3306";
	public static String user = "root";
	public static String password = "";
	
	public static String dbname = "backend";
	public static String tablename = "clothes";
	
	public static Connection con;
	
	public static ArrayList<clothesobject> connect() {
		con = null;
		ArrayList<clothesobject> array = null;
		
		// Treiber laden
		try {Class.forName("com.mysql.cj.jdbc.Driver").newInstance();}
		catch(Exception ex) {
			System.out.println("Treiber fehlgeschlagen!");
			ex.printStackTrace();
		}
		
		// Verbindung aufbauen
		try {
			String url = "jdbc:mysql://" + ip + ":" + port + "/" + dbname + "?useUnicode=true&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC";
			con = DriverManager.getConnection(url, user, password);
			
			array = data();
			
			con.close();
		} catch (SQLException ex) {System.out.println("Verbindung fehlgeschlagen!"); ex.printStackTrace();}
		
		return array;
	}
	
	public static ArrayList<clothesobject> data() {
		ArrayList<clothesobject> objectlist = new ArrayList<clothesobject>();
		
		try {
			// Objekt aus Datenbank auslesen
			
			String query = "select * FROM " + tablename;
			Statement stmt = con.createStatement();
			ResultSet rset;
			
			rset = stmt.executeQuery(query);
			
			
			
			
			// Objekt zu clothesobject übergeben
			while(rset.next()) {
				clothesobject object = new clothesobject();
				//object.createObject(rset.getInt(0), rset.getString(1), rset.getFloat(2), rset.getFloat(3), rset.getString(4), rset.getString(5), rset.getFloat(6), rset.getString(7), rset.getString(8), rset.getBoolean(9), rset.getString(10));
				object.createObject(rset.getInt(1), rset.getString(2), rset.getFloat(3), rset.getFloat(4), rset.getString(5), rset.getString(6), rset.getFloat(7), rset.getString(8), rset.getString(9), rset.getBoolean(10), rset.getString(11));
				
				System.out.println("Daten: " + object.datum + object.name + object.category);
				
				objectlist.add(object);
			}
			
			rset.close();
			stmt.close();
		} catch(SQLException ex) {
			System.out.println("------------");
			System.out.println("O_O");
			System.out.println("------------");
			ex.printStackTrace();
		}
		System.out.println("Daten 3: " + objectlist.get(0).name + objectlist.get(0).datum);
		return objectlist;
	}
}
