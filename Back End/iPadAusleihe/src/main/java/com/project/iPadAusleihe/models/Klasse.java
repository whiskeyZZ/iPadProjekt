package com.project.iPadAusleihe.models;


import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
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

    @OneToMany
    @JoinColumn(name = "klasseID")
    private Set<Schueler> schueler;
    
}
