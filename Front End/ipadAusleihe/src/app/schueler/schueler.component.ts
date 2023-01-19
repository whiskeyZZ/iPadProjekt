import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IPad } from '../IPad';
import { IPadService } from '../ipad.service';
import { Schueler } from '../schueler';
import { SchuelerService } from '../schueler.service';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';

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
    console.log(this.schuelerList);

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
        console.log(this.schuelerList);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public fillBool(): void {
    for (let i=0; i<1000; i++){
      this.showEntry.push(false);
    }
    console.log(this.showEntry);
    console.log("test");
  }

  public showEntryField(i: number): void {
    console.log("test");
    if (this.showEntry[i] == false){
      this.showEntry[i] = true;
    }
    else {
      this.showEntry[i] = false;
    }

    this.fetchIPads();
  }

  public fetchIPads(): void {
    this.ipadservice.getIPads().subscribe((response: IPad[]) => {
      this.ipads = response;
      console.log(this.ipads);
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  );
  }
  

  public confirm(): void {

  }
}




