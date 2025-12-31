import type {ApiRoutesWithoutPrefix, Locale} from '../constant';
import {DATE_FORMAT, defaultLocale} from "../constant";
import type {ConfigType} from 'dayjs';
import dayjs from 'dayjs';
import 'dayjs/locale/fr'; // Import the locale you want to use
import localizedFormat from 'dayjs/plugin/localizedFormat'; // Import the localizedFormat plugin
import relativeTime from 'dayjs/plugin/relativeTime';

// Extend dayjs with the localizedFormat plugin
dayjs.extend(localizedFormat);

dayjs.extend(relativeTime);

export const extractIntegerFromIRI = (iri: string): number | null => {
    // Regular expression to find a single number in the IRI
    const iriRegex = /\/(\d+)\//;
    const match = iri.match(iriRegex);
    if (!match) return null;

    // Extracted substring containing the number
    const extractedNumber = match[1] as string;

    // Convert the extracted substring to an integer
    return parseInt(extractedNumber, 10);
};

// Function to check if a string is a valid UUID
const isUUID = (str: string): boolean => {
    const uuidRegex = /[0-9a-f]{8}-[0-9a-f]{4}-[1-7][0-9a-f]{3}-[0-9a-f]{4}-[0-9a-f]{12}/i;

    return uuidRegex.test(str);
};

export const generateIRI = (
    baseString: ApiRoutesWithoutPrefix,
    id: number | string | object,
    prefix: string = ""
): string | object => {
    if (typeof id === "object") {
        return id;
    }
    let lastPart = "";
    // If the id is a string, try to extract the number from it
    if (typeof id === "string") {
        // Extract the last part of the path
        const parts = id.split("/");
        lastPart = parts[parts.length - 1] as string;

        // Check if it matches UUID format
        if (!isUUID(lastPart))  {
            const extractedNumber = parseInt(id.split("/").pop() || "");
            if (!isNaN(extractedNumber)) {
                // If a valid number is extracted from the string, use it as the ID
                lastPart = extractedNumber as unknown as string;
            }
        }
    }
    if (typeof id === "number") {
        lastPart = id as unknown as string;
    }
    // Remove trailing slashes from the base string
    const trimmedBaseString = baseString.replace(/\/+$/, "");
    // Append the ID to the base string to create the IRI
    const iri = `${prefix}${trimmedBaseString}/${lastPart}`;
    return iri;
};

export const truncate = (str?: string, length: number = 30) => {
    if (typeof str === "undefined") {
        return "";
    }
    if (str === null) {
        return "";
    }
    if (str.length <= length) {
        return str;
    }
    return str.length > 10 ? str.substring(0, length) + "..." : str;
};

export const generateUrl = (path: string, params?: any): string => {
    let url = path;

    if (typeof params === "undefined" || params === null) {
        url = path;
    } else if (typeof params === "string" || params instanceof String) {
        if (params[0] === "?") {
            url = `${path}${params}`;
        } else {
            url = `${path}?${params}`;
        }
    } else {
        const queryString = Object.keys(params)
            .map((key) => `${key}=${params[key as keyof typeof params]}`)
            .join("&");
        if (queryString.trim() !== "") {
            url = `${path}?${queryString}`;
        }
    }


    return `${url}`;
    // return `${API_URL}${url}`;
};


export const getTranslation = (input: any, locale?: string, returnDefault?:boolean, property?:string)=> {

    if(property && property in input){
        const translation = input?.property?.find((trans: any) => trans?.locale?.code === (locale??"en"));
        return translation ? translation :  typeof returnDefault=="undefined"|| returnDefault===true ? input?.property?.[0]: null;
    }else if (input?.translations) {
        const translation = input?.translations?.find((trans: any) => trans?.locale?.code === (locale??"en"));
        return translation ? translation : typeof returnDefault=="undefined"|| returnDefault===true ? input?.translations?.[0]: null;

    }else if(input?.contents) {
        const translation = input.contents.find((trans: any) => trans?.locale?.code === (locale??"en"));
        return translation ? translation : typeof returnDefault=="undefined"|| returnDefault===true ? input?.contents?.[0]: null;
    }
    else
    {
        return null;
    }




};
export const capitalizeFirstLetter = (word?: string) => {
    if (typeof word !== 'string') {
        return '';
    }
    return word.charAt(0).toUpperCase() + word.slice(1);
};

export const formatDate = (
    date: ConfigType,
    locale: string = defaultLocale,
    withHour = false,
) => {
    // This function should be used for converting ISO formatted dates to
    // the 'DD/MM/YYYY' or 'DD/MM/YYYY hh:mm:ss' format used everywhere on the project.
    if (!date || !dayjs(date).isValid()) {
        return '-';
    }

    const formatedDate = dayjs(date)
        .locale(locale)
        .format(withHour ? DATE_FORMAT.DATETIME : DATE_FORMAT.DATE);
    return locale == defaultLocale ? capitalizeFirstLetter(formatedDate) : formatedDate;
};

export const parseDate = (date: string, locale: Locale = defaultLocale) => {
    let parsedDate = dayjs(date);
    parsedDate = parsedDate.locale(locale);

    return parsedDate.isValid() ? parsedDate : dayjs(date);
};


export const getYear = (date?: string): string => {

    return date? new Date(date).getFullYear() as unknown as string: "";
};
