export interface User {
    id: string;
    email: string;
    password: string;
    roles: string[];
    firstName: string;
    lastName: string;
    fullName: string;
    phoneNumber: string;
    birthdate: string;
    createdAt: string;
    createdAtAgo: string;
    updatedAt: string;
    updatedAtAgo: string;
    photoProfile: any;
    isCompany?: boolean;
    vatNumber?: string;
    github:string;
    fiscalCode?: string;
        address: string;
        country: string;
        facebook: string;
        linkedin: string;
        instagram: string;
        website:string;
        twitter: string;

}
