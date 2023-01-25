import { IPad } from "./IPad";
import { Lehrer } from "./Lehrer";
import { Schueler } from "./schueler";

export interface Ausleihhistorie {
    ipad: IPad;
    schuelerID: number;
    lehrerID: number;
    ausleihstatus: String;
    ausgabedatum: Date;
    rueckgabedatum: Date;

}