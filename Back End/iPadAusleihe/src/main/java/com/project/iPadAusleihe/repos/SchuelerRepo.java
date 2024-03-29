package com.project.iPadAusleihe.repos;

import java.util.Collection;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.project.iPadAusleihe.models.Schueler;

public interface SchuelerRepo extends JpaRepository<Schueler, Long> {

    @Query(value = "SELECT * FROM schueler WHERE klasseid = 1",  nativeQuery = true)
    Collection<Schueler> findAllSchuelerInSpecificClass();

    //@Query(value = "SELECT * FROM schueler WHERE klasseid = :klasse_id",  nativeQuery = true)
    //Collection<Schueler> findAllSchuelerInSpecificClass(@Param("klasse_id)") int klasse_id);

}
