import { Schueler } from "./schueler";

export interface Klasse {
  name: string;
  klassenlehrer: string;
  schueler: Schueler[]
}
