package com.project.iPadAusleihe.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.iPadAusleihe.models.Klasse;
import com.project.iPadAusleihe.repos.KlasseRepo;

@Service
@Transactional
public class KlasseService {
    
    private final KlasseRepo klasseRepo;
    
    @Autowired
    public KlasseService(KlasseRepo klasseRepo) {
        this.klasseRepo = klasseRepo;
    }

    public Klasse addKlasse(Klasse klasse) {
        return klasseRepo.save(klasse);
    }

    public List<Klasse> findAllKlassen() {
        return klasseRepo.findAll();
    }
}
