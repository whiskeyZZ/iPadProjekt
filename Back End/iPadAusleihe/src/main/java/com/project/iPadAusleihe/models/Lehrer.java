package com.project.iPadAusleihe.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;


@Getter
@Entity
@Table(name="lehrer")
public class Lehrer {
    
    @Id
    @GeneratedValue
    private long id;

    @Column(name = "nachname")
    private String nachname;

    @Column(name = "vorname")
    private String vorname;
}
