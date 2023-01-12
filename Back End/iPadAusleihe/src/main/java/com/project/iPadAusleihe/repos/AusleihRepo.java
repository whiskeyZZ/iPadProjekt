package com.project.iPadAusleihe.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import com.project.iPadAusleihe.models.Ausleihhistorie;

public interface AusleihRepo extends JpaRepository<Ausleihhistorie, Long>{
    
}
