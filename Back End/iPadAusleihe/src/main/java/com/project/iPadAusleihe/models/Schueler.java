package com.project.iPadAusleihe.models;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Getter;

@Getter
@Entity
@Table(name = "schueler")
public class Schueler {
    
    @Id
    @GeneratedValue
    private long id;

    @Column(name = "nachname")
    private String nachname;

    @Column(name = "vorname")
    private String vorname;

    @Column(name = "geburtsdatum")
    private Date geburtsdatum;

    @ManyToOne
    @JoinColumn(name = "klasseID")
    private Klasse klasse;

    @Column(name = "schuelerID")
    private String schuelerID;

    public void setSchuelerID(String schuelerID) {
        this.schuelerID = schuelerID;
    }

}
