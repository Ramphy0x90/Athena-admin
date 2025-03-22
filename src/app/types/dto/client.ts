import { DbObject } from "./db-object";

export type Client = DbObject & {
    name: string;
    description: string;
    image: string;
    baseUrl: string;
    postAuthUrl: string;
}