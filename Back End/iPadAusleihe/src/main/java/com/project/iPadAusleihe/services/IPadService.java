package com.project.iPadAusleihe.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.iPadAusleihe.models.IPad;
import com.project.iPadAusleihe.repos.IPadRepo;

@Service
public class IPadService {
    
    private final IPadRepo iPadRepo;

    @Autowired
    public IPadService(IPadRepo iPadRepo){
        this.iPadRepo = iPadRepo;
    }

    public List<IPad> getIPads(){
        return iPadRepo.findAll();
    }
}
