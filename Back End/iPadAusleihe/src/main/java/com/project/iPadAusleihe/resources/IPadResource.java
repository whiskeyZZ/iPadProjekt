package com.project.iPadAusleihe.resources;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.iPadAusleihe.models.IPad;
import com.project.iPadAusleihe.services.IPadService;

@RestController
@RequestMapping("/ipads")
public class IPadResource {

    private final IPadService ipadservice;

    public IPadResource(IPadService ipadservice){
        this.ipadservice = ipadservice;
    }

    @CrossOrigin
    @GetMapping("/all")
    public ResponseEntity<List<IPad>> getAllIPads(){
        List<IPad> ipads = ipadservice.getIPads();
        return new ResponseEntity<>(ipads, HttpStatus.OK);
    }
}
