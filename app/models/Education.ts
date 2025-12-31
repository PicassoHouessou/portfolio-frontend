import type {Locale} from "~/models/Locale";
import type {Experience} from "~/models/Experience";

export interface EducationTranslation {
    id:number;
    degree:string;
    school:string;
    location:string
    description:string;
    locale:Locale;
    experience:Pick<Experience, 'id'&'locationType' & 'startAt' &'endAt'>
}

export interface Education{
    id:number;
    startAt:string;
    endAt:string;
    user:string;
    translations:Array<EducationTranslation>
}

