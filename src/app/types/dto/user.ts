import { DbObject } from "./db-object";

export type User = DbObject & {
    name: string;
    surname: string;
    email: string;
    userName: string;
}