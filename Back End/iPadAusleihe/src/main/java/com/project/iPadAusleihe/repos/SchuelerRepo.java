package com.project.iPadAusleihe.repos;


import org.springframework.data.jpa.repository.JpaRepository;

import com.project.iPadAusleihe.models.Schueler;

public interface SchuelerRepo extends JpaRepository<Schueler, Long>{
    
}
