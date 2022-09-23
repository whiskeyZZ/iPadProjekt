package com.project.iPadAusleihe.resources;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.iPadAusleihe.models.Klasse;
import com.project.iPadAusleihe.services.KlasseService;


@RestController
@RequestMapping("/klasse")
public class KlasseResource {
    private final KlasseService klasseService;

    public KlasseResource(KlasseService klasseService) {
        this.klasseService = klasseService;
    }

    @CrossOrigin
    @GetMapping("/all")
    public ResponseEntity<List<Klasse>> getAllKlassen() {
        List<Klasse> klasse = klasseService.findAllKlassen();
        return new ResponseEntity<>(klasse, HttpStatus.OK);
    }

    @PostMapping("/add") 
    public ResponseEntity<Klasse> addKlasse(@RequestBody Klasse klasse) {
        Klasse newKlasse = klasseService.addKlasse(klasse);
        return new ResponseEntity<>(newKlasse, HttpStatus.CREATED);
    }
}