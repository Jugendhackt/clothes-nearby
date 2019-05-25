package de.outfit;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

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
	
	private static void data() throws SQLException {
		String query = "select * FROM " + dbname;
		Statement stmt = con.createStatement();
		ResultSet rset = stmt.executeQuery(query);
		
		// TODO
		
		rset.close();
		stmt.close();
	}
}
