import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IPad } from '../IPad';
import { IPadService } from '../ipad.service';
import { Schueler } from '../schueler';
import { SchuelerService } from '../schueler.service';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { Ausleihhistorie } from '../ausleihhistorie';

@Component({
  selector: 'app-schueler',
  templateUrl: './schueler.component.html',
  styleUrls: ['./schueler.component.css']
})
export class SchuelerComponent implements OnInit {
  public schuelerList: Schueler[];
  public ipads: IPad[];
  
  public showEntry: boolean[] = [];
  serialnumber: string[] = [];

  myControl = new FormControl<string | IPad>('');
  filteredOptions: Observable<IPad[]>;


  constructor(private schuelerService: SchuelerService, private ipadservice: IPadService) {
   }

  ngOnInit(): void {
    this.fillBool();
    this.getSchueler();
    this.fetchIPads();

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.seriennummer;
        return name ? this._filter(name as string) : this.ipads.slice();
      }),
    );
  }

  private _filter(name: string): IPad[] {
    const filterValue = name;

    return this.ipads.filter(option => option.seriennummer.includes(filterValue));
  }

  displayFn(ipad: IPad): string {
    return ipad  && ipad.seriennummer ? ipad.seriennummer : '';
  }

  public getSchueler(): void {
    this.schuelerService.getSchueler().subscribe(
      (response: Schueler[]) => {
        this.schuelerList = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public fillBool(): void {
    for (let i=0; i<100; i++){
      this.showEntry.push(false);
    }
  }

  public showEntryField(i: number): void {
    if (this.showEntry[i] == false){
      this.showEntry[i] = true;
    }
    else {
      this.showEntry[i] = false;
    }
  }

  public fetchIPads(): void {
    this.ipadservice.getIPads().subscribe((response: IPad[]) => {
      this.ipads = response;
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  );
  }
  
  public confirm(i: number): void {
    const Ausleihhistorie = {
      iPad: this.searchForIPad(i).id,
      schueler: this.schuelerList[i].id,
      lehrer: 1,
      ausgabe: null,
      rueckgabe: null,
      status: "ausgeliehen"
    }

    this.ipadservice.postHistorie(JSON.stringify(Ausleihhistorie));
  }

  public searchForIPad(i: number): any {

    for (let x=0; i<this.ipads.length; x++){
      console.log("Seriennummer: " + this.ipads[x].seriennummer);
      console.log("Serialnumber: " + JSON.stringify(this.serialnumber[i]))
      console.log("Serialnumber: " + Object.values(this.serialnumber[i])[1])
      if (this.ipads[x].seriennummer == Object.values(this.serialnumber[i])[1]){
        return this.ipads[x];
      }
    }
    return null;
    
  }
}




