package com.project.iPadAusleihe.models;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name="ausleihhistorie")
public class Ausleihhistorie{

    @Id
    @GeneratedValue
    private long id;

    @OneToOne
    @JoinColumn(name = "ipadID")
    private IPad ipad;

    @OneToOne
    @JoinColumn(name = "schuelerID")
    private Schueler schueler;

    @OneToOne
    @JoinColumn(name = "lehrerID")
    private Lehrer lehrer;

    @Column(name="ausleihstatus")
    private String ausleihstatus;

    @Column(name="ausgabedatum")
    private LocalDate ausgabedatum;

    @Column(name="rueckgabedatum")
    private LocalDate rueckgabedatum;
}