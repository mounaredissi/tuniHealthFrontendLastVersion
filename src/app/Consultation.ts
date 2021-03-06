import { Time } from "@angular/common";
import { Medecin } from "./Medecin";
import { Patient } from "./patient";

export interface Consultation 
{
    id:bigint,
    Date: Date,
    patient:Patient,
    t_debut:Time,
    t_fin:string,
    medecin:Medecin,
    h:number,

}