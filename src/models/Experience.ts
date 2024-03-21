import type {LocationType} from "~/models/LocationType";
import type {Locale} from "~/models/Locale";
export interface ExperienceTranslation {
    id:number;
    title:string;
    description:string;
    location:string;
    locale:Locale
    experience:Pick<Experience, 'id'&'locationType' & 'startAt' & 'endAt'>

}

export interface Experience{
    id:number;
    company:string;
    startAt:string;
    endAt:string;
    locationType:LocationType;
    user:string;
    translations:Array<ExperienceTranslation>
}

