/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package DAO;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.LinkedList;
import java.util.List;
import javax.naming.NamingException;

/**
 *
 * @author Joshu
 */
public class mailDao extends Dao {
    
    public mailDao(String jndiName) throws NamingException{
        super("jdbc/pauls");
    }
    
    
    public List<Mail> getmail(String message) {
		List<Mail> mail = new LinkedList<>();
	
		/**
		 * A connection to the database. Connections are used to execute SQL.
		 */
		Connection connection = null;
		/**
		 * A SQL statement to execute against the database.
		 */
		PreparedStatement stmt = null;
		/**
		 * The results of the SQL execution.
		 */
		ResultSet rs = null;
		try {
			//Use the data source to get a connection
			connection = ds.getConnection();
			//Use the connection to create a SQL statement
			stmt = connection.prepareStatement("SELECT * FROM events WHERE event_date LIKE ?");
			int i = 1;
			//Fill in the ? parameter in the SQL statement above with real data.
			stmt.setString(i++, eventDate);
			//Put the SQL statement about to execute into the log file.
			logger.debug("SQL: {}",stmt.toString());
			//Execute the SQL statement and get the result data.
			rs = stmt.executeQuery();
			//Check if the result data has at least 1 row of data.
			while (rs.next()) {
				//Call our private utility method to construct an Email POJO instance from the result data.
				Mail mail = getmessage(rs);
				mail.add(message);
			}
			return message;
		} catch (Exception e) {
			e.printStackTrace();
			//Log the problem.
			logger.error("Could not retrieve Event from the database!!! "+eventDate,e);
			//Also return null since we have no Episodes to return.
			Mail mail = new Mail();
			return null;
			
		} finally {
			/**
			 * finally blocks like this are where cleanup activities go, since finally blocks are always executed
			 * no matter what.
			 */
			closeResources(rs, stmt, connection);
		}
}
