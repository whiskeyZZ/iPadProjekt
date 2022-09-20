package com.project.iPadAusleihe.resources;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.iPadAusleihe.models.Schueler;
import com.project.iPadAusleihe.services.SchuelerService;

@RestController
@RequestMapping("/schueler")
public class SchuelerResource {
    private final SchuelerService schuelerService;

    public SchuelerResource(SchuelerService schuelerService) {
        this.schuelerService = schuelerService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Schueler>> getAllSchueler() {
        List<Schueler> schueler = schuelerService.findAllSchueler();
        return new ResponseEntity<>(schueler, HttpStatus.OK);
    }

    @PostMapping("/add") 
    public ResponseEntity<Schueler> addSchueler(@RequestBody Schueler schueler) {
        Schueler newSchueler = schuelerService.addSchueler(schueler);
        return new ResponseEntity<>(newSchueler, HttpStatus.CREATED);
    }
}
