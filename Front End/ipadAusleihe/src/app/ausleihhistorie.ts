import { IPad } from "./IPad";
import { Lehrer } from "./Lehrer";
import { Schueler } from "./schueler";

export interface Ausleihhistorie {
    id: number;
    ipad: IPad;
    schueler: Schueler;
    lehrer: Lehrer;
    ausgabe: Date;
    rueckgabe: Date;
    status: String;

}