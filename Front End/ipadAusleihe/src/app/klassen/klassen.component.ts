import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Klasse } from '../klasse';
import { KlasseService } from '../klasse.service';
import { SchuelerComponent } from '../schueler/schueler.component';


@Component({
  selector: 'app-klassen',
  templateUrl: './klassen.component.html',
  styleUrls: ['../app.component.css']
})
export class KlassenComponent implements OnInit {
  public klassen: Klasse[];

  constructor(private klasseService: KlasseService) { }

  ngOnInit(): void {
    this.getKlassen();
  }

  public getKlassen(): void {
    this.klasseService.getKlassen().subscribe(
      (response: Klasse[]) => {
        this.klassen = response;
        console.log(this.klassen);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
