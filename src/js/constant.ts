export enum HttpMethod {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE",
    PATCH = "PATCH",
    HEAD = "HEAD",
    OPTIONS = "OPTIONS",
}

export enum ApiFormat {
    JSON = "application/json",
    JSONLD = "application/ld+json",
    GRAPHQL = "application/graphql",
    JSONAPI = "application/vnd.api+json",
    HAL = "application/hal+json",
    YAML = "application/x-yaml",
    CSV = "text/csv",
    HTML = "text/html",
    RAW_JSON = "raw/json",
    RAW_XML = "raw/xml",
}

/*
export const API= process.env.API as string;
export const API_URL =  process.env.API_URL as string;
export const CV_URL= process.env.CV_URL as string;
 */
export const API= "https://localhost:8000";

export const API_URL =  "https://localhost:8000/api";
export const CV_URL= "https://127.0.0.1:8000/cv/download";
/*

API="https://localhost:8000"
API_URL="https://localhost:8000/api"
#CV_URL="https://backend.picassohouessou.com/cv/download"
CV_URL=https://127.0.0.1:8000/cv/download
 */
export enum ApiRoutesWithoutPrefix {
    USERS = "/users",
    EXPERIENCES = "/experiences",
    EDUCATIONS = "/educations",
    LOCATIONS = "/locations",
    CONTACT_USES= "contact_uses",
    POSTS="/posts"

}
