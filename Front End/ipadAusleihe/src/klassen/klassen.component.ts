import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'klassen-root',
  templateUrl: './klassen.component.html',
  styleUrls: ['../app/app.component.css']
})
export class KlassenComponent implements OnInit{
  title = 'iPad Borger';
  klassen = [
    { name: "BIT20-1"},
    { name: "BIT19-1"},
    { name: "APT18-2"}
  ];
  ngOnInit() {

  }
 

}



