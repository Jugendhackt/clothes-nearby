package de.outfit;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

@WebServlet("/clothes")
public class clothes extends HttpServlet {
	private static final long serialVersionUID = 1L;
    public clothes() {}
    
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		SimpleDateFormat sdf = new SimpleDateFormat("HH:mm:ss");
		String uhrzeit = sdf.format(new Date());
		
		System.out.println(uhrzeit + " | Neue Abfrage der Datenbank von folgender IP: " + request.getLocalAddr());
		
		Gson gson = new Gson();
		ArrayList<clothesobject> array = MySQL.connect();
		
		String json = gson.toJson(array);
		
		response.addHeader("Access-Control-Allow-Origin", "*");
		response.getWriter().append(json);
	}
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}
}
