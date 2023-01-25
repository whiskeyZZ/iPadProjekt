package com.project.iPadAusleihe.resources;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.iPadAusleihe.models.Ausleihhistorie;
import com.project.iPadAusleihe.services.AusleihService;

@RestController
@RequestMapping("/ausleihhistorie")
public class AusleihResource {
    
    @Autowired
    private final AusleihService ausleihService;

    public AusleihResource(AusleihService ausleihService) {
        this.ausleihService = ausleihService;
    }

    @CrossOrigin
    @PostMapping("/add") 
    public ResponseEntity<Ausleihhistorie> addAusleihhistorie(@RequestBody Ausleihhistorie historie) {
        System.out.println("okay");
        historie.setAusgabedatum(LocalDate.now());
        historie.setRueckgabedatum(LocalDate.now().plusDays(365));
        Ausleihhistorie newhistorie = ausleihService.addOrUpdateHistorie(historie); 
        return new ResponseEntity<>(newhistorie, HttpStatus.CREATED);
    }
}
