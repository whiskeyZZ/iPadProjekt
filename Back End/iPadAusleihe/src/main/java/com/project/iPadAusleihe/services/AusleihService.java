package com.project.iPadAusleihe.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.iPadAusleihe.models.Ausleihhistorie;
import com.project.iPadAusleihe.repos.AusleihRepo;

@Service
public class AusleihService {
    
    private final AusleihRepo ausleihrepo;

    @Autowired
    public AusleihService(AusleihRepo ausleihRepo){
        this.ausleihrepo = ausleihRepo;
    }

    public Ausleihhistorie addOrUpdateHistorie(Ausleihhistorie historie){
        return ausleihrepo.save(historie);
    }
}
