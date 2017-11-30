/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package POJO;

/**
 *
 * @author Joshu
 */


public class mail {
private int id;
private String message;
private String dateSent;
private String dateRecieved;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getDateSent() {
        return dateSent;
    }

    public void setDateSent(String dateSent) {
        this.dateSent = dateSent;
    }

    public String getDateRecieved() {
        return dateRecieved;
    }

    public void setDateRecieved(String dateRecieved) {
        this.dateRecieved = dateRecieved;
    }
    
}
