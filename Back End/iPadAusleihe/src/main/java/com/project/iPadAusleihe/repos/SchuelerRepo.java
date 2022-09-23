package com.project.iPadAusleihe.repos;

import java.util.Collection;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.project.iPadAusleihe.models.Schueler;

public interface SchuelerRepo extends JpaRepository<Schueler, Long> {

    @Query(value = "SELECT * FROM schueler WHERE klasseid = 1",  nativeQuery = true)
    Collection<Schueler> findAllSchuelerInSpecificClass();
}
