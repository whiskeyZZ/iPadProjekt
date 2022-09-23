import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Schueler } from '../schueler';
import { SchuelerService } from '../schueler.service';

@Component({
  selector: 'app-schueler',
  templateUrl: './schueler.component.html',
  styleUrls: ['./schueler.component.css']
})
export class SchuelerComponent implements OnInit {
  public schuelerList: Schueler[];

  constructor(private schuelerService: SchuelerService) { }

  ngOnInit(): void {
    this.getSchueler();
  }

  public getSchueler(): void {
    this.schuelerService.getSchueler().subscribe(
      (response: Schueler[]) => {
        this.schuelerList = response;
        console.log(this.schuelerList);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
