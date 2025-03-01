export type DbObject = DbObjectField & {
    id: string;
}

type DbObjectField = Record<string, any>;