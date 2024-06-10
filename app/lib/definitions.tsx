export type User = {
    id: number;
    email: string;
    password: string;
    image: string;
};

export type Product = {
    id: number;
    nameeng: string;
    namegeo: string;
    descriptioneng: string;
    descriptiongeo: string;
    price: number;
    imageurl: string;
    servicetypeid: number; // FK from ServiceType table
};

export type ServiceType = {
    id: number;
    nameeng: string;
    namegeo: string;
}

export type ContactMe = {
    id: number;
    userid: number;
    message: string;
}