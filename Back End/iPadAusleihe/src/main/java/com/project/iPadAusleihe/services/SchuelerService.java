package com.project.iPadAusleihe.services;

import java.util.List;
import java.util.UUID;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.iPadAusleihe.models.Schueler;
import com.project.iPadAusleihe.repos.SchuelerRepo;

@Service
@Transactional
public class SchuelerService {
    
    private final SchuelerRepo schuelerRepo;
    
    @Autowired
    public SchuelerService(SchuelerRepo schuelerRepo) {
        this.schuelerRepo = schuelerRepo;
    }

    public Schueler addSchueler(Schueler schueler) {
        schueler.setSchuelerID(UUID.randomUUID().toString());
        return schuelerRepo.save(schueler);
    }

    public List<Schueler> findAllSchueler() {
        return schuelerRepo.findAll();
    }
}
