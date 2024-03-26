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
export enum ApiRoutesWithoutPrefix {
    USERS = "/users",
    EXPERIENCES = "/experiences",
    EDUCATIONS = "/educations",
    LOCATIONS = "/locations",
    CONTACT_USES= "contact_uses",
    POSTS="/posts"

}
