import type {Locale} from "~/models/Locale";
export interface CategoryTranslation {
    id:number;
    name:string;
    description:string;
    locale:Locale
    category:Pick<Category, 'id'&'locationType' & 'startAt' & 'endAt'>

}

export interface Category{
    id:number;
    name:string;
    slug:string;
    translations:Array<CategoryTranslation>
}

