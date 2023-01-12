package com.project.iPadAusleihe.models;


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
@Table(name = "klasse")
public class Klasse {
    
    @Id
    @GeneratedValue
    private long id;

    @Column(name = "name")
    private String name;

    @Column(name = "klassenlehrer")
    private String klassenlehrer;
    
    @ManyToOne
    @JoinColumn(name = "lehrerID")
    private Lehrer lehrer;
}
