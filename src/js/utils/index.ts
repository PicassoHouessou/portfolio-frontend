
import {API_URL, ApiRoutesWithoutPrefix} from "../constant";

export const extractIntegerFromIRI = (iri: string): number | null => {
    // Regular expression to find a single number in the IRI
    const iriRegex = /\/(\d+)\//;
    const match = iri.match(iriRegex);
    if (!match) return null;

    // Extracted substring containing the number
    const extractedNumber = match[1];

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
    prefix: string = API_URL
): string | object => {
    if (typeof id === "object") {
        return id;
    }
    let lastPart = "";
    // If the id is a string, try to extract the number from it
    if (typeof id === "string") {
        // Extract the last part of the path
        const parts = id.split("/");
        lastPart = parts[parts.length - 1];

        // Check if it matches UUID format
        if (isUUID(lastPart)) {
            lastPart = lastPart;
        } else {
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


    return `${API_URL}${url}`;
};


export const getTranslation = (input: any, locale?: string, returnDefault?:boolean, property?:string)=> {

    if(property && property in input){
        const translation = input?.property?.find((trans: any) => trans?.locale?.code === (locale??"en"));
        return translation ? translation :  typeof returnDefault=="undefined"|| returnDefault===true ? input?.property?.[0]: null;
    }else if (input?.translations) {
        const translation = input?.translations?.find((trans: any) => trans?.locale?.code === (locale??"en"));
        console.log(translation)
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


