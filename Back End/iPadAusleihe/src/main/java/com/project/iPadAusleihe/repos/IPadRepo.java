package com.project.iPadAusleihe.repos;

//package com.project.iPadAusleihe.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import com.project.iPadAusleihe.models.IPad;

public interface IPadRepo extends JpaRepository<IPad, Long>{
    
}
